var MongoClient = require('mongodb').MongoClient, 
express = require('express'),
logger = require('morgan'),
app = express(),
bodyParser = require('body-parser'),
assert = require('assert'),
mongoose = require('mongoose'),
router = require('./router'),
config = require('./config/config'),
dealSchema = require('./models/udeal'),
controller = require('./controllers/udeals.controller');


// Connection URL
//var url = 'mongodb://localhost:27017/UDeals';

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {useMongoClient: true});

// Start the server
const server = app.listen(config.port);  
console.log('Your server is running on port ' + config.port + '.');  

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

var Deal = mongoose.model('Deal', dealSchema.dealSchema);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected successfully to server");



    var bdubs = new Deal({ offer: 'Wing Night!', details: {name:'bdubs', addresss: 'main street',
    day: 'tuesday',
    time: 'all day',
    description: 'half priced wings',
    deliver: false,
    link: 'www.bdubs.com probably',
    recurring: true } });
    console.log(bdubs.details.name); // 'Silence'

      

    //   var fluffy = new Kitten({ name: 'fluffy' });
      bdubs.speak(); // "Meow name is fluffy"

    //   bdubs.save(function (err, bdubs) {
    //     if (err) return console.error(err);
    //     bdubs.speak();
    //  });

      Deal.find(function (err, deals) {
        if (err) return console.error(err);
        console.log(deals);
      })

      //Deal.find({ name: /^wing/ }, callback);
});


app.get('/hello', function(req, res, next){
    controller.getUDeals(req,res,next);
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

// app.all('/test', function(req, res){
//     res.send("HTTP method doesn't have any effect on this route!");
//  });

//  var things = require('./things.js');

//  app.use('/things', things);
 
//app.listen(3000);
router(app);


// Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
// assert.equal(null, err);
// console.log("Connected successfully to server");

// db.close();
// });