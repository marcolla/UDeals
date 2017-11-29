const UDeal=require('../models/udeal');

exports.getUDeals=function(req,res,next){
    UDeal.find({},function(err,udeal){
        res.status(201).json(udeal)
    });
}

exports.createUDeal=function(req,res,next){
    console.log(req.body);
    var u=new UDeal({offer: req.body.offer,
        details:{name:req.body.details.name,
            address:req.body.details.address,
            day: req.body.details.day,
            time: req.body.details.time,
            description: req.body.details.description,
            deliver: req.body.details.deliver,
            link: req.body.details.link,
            recurring: req.body.details.recurring}});
    // var u=new UDeal({ offer: '3 dolla ice cream', details: {name:'qdoba', addresss: 'main street',
    // day: 'Sunday',
    // time: '1pm - 3am',
    // description: 'I scream for ice cream',
    // deliver: false,
    // link: 'www.qdoba.org perhaps',
    // recurring: true }});

    u.save(function(err,udeal){
        res.status(200).json(udeal);
    });
}

    exports.findUDeal=function(req,res,next){
        var deal = UDeal.findOne({ offer: req.body.offer}, function(err,udeal){
            res.status(201).json(udeal)
        });
    }