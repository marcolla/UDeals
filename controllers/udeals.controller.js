const UDeal=require('../models/udeal');

exports.getUDeal=function(req,res,next){
    UDeal.find({},function(err,udeal){
        res.status(201).json(udeal);
    });
}

exports.createUDeal=function(req,res,next){
    console.log(req.body);
    var u=new UDeal({ offer: 'Dollar Beers', details: {name:'bdubs', addresss: 'main street',
    day: 'tuesday',
    time: 'all day',
    description: 'dollar beers, duh',
    deliver: false,
    link: 'www.bdubs.com probably',
    recurring: true }});
    
    u.save(function(err,udeal){
        res.status(200).json(udeal);
    });
}