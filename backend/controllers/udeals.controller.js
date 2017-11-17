const UDeal=require('../models/udeal');

exports.getUDeals=function(req,res,next){
    UDeal.find({},function(err,udeal){
        res.status(201).json(udeal)
    });
}

exports.createUDeal=function(req,res,next){
    console.log(req.body);
    var u=new UDeal({ offer: 'Half Priced Full Size Macs', details: {name:'Mad Macs and Matildas', addresss: 'main street',
    day: 'Monday',
    time: 'all day',
    description: '50% off full sized macs (lobster mac excluded from this deal)',
    deliver: false,
    link: 'www.madmacs.com maybe',
    recurring: true }});

    u.save(function(err,udeal){
        res.status(200).json(udeal);
    });
}