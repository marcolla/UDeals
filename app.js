var MongoClient = require('mongodb').MongoClient, 
assert = require('assert'),
mongoose = require('mongoose'),
router = require('./router'),
dealSchema = require('./models/udeal');


// Connection URL
var url = 'mongodb://localhost:27017/UDeals';

mongoose.connect(url);

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

      //Kitten.find({ name: /^fluff/ }, callback);
});



var express = require('express');
var app = express();




app.get('/hello', function(req, res){
    Deal.find(function (err, deals) {
        if (err) return console.error(err);
        res.send(deals);
      })
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

// app.all('/test', function(req, res){
//     res.send("HTTP method doesn't have any effect on this route!");
//  });

//  var things = require('./things.js');

//  app.use('/things', things);
 
app.listen(3000);


// Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
// assert.equal(null, err);
// console.log("Connected successfully to server");

// db.close();
// });