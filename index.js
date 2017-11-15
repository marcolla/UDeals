var express = require('express');
var app = express();
router = require('./router');

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.post('/hello', function(req, res){
//    res.send("You just called the post method at '/hello'!\n");
// });

// app.all('/test', function(req, res){
//     res.send("HTTP method doesn't have any effect on this route!");
//  });

 var things = require('./things.js');

 app.use('/things', things);
 
app.listen(3000);