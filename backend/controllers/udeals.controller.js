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
            recurring: req.body.details.recurring,
            tags: req.body.details.tags}});
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
        console.log(req.params);
        var deal = UDeal.findOne(req.params, function(err,udeal){
            res.status(201).json(udeal)
        });
    }


    exports.findUDealTest=function(req,res,next){
        var deal = UDeal.find({ recurring: req.body.details.recurring}, function(err,udeal){
            res.status(201).json(udeal)
        });
    }

    exports.editUDeal = function(req,res,next) {
        var deal = UDeal.updateOne({offer: req.body.offer},
            { $set: { details:{name:req.body.details.name,
            address:req.body.details.address,
            day: req.body.details.day,
            time: req.body.details.time,
            description: req.body.details.description,
            deliver: req.body.details.deliver,
            link: req.body.details.link,
            recurring: req.body.details.recurring,
            types: req.body.details.types} } },
            function(err, udeal) {
                res.status(201).json(udeal)
            })
    }

    exports.deleteUDeal = function(req,res,next) {
        var deal = UDeal.remove({offer: req.body.offer}, 
            function(err, udeal) {
                res.status(201).json(udeal)
            })
    }

    exports.findByTag = function(req,res,next) {
        if (req.params.tags == "any") {
            if (req.params.day == "any") {
                if (req.params.deliver == "any") {
                    UDeal.find({},function(err,udeal){
                        res.status(201).json(udeal)
                    });
                }
                else {
                    UDeal.find({"details.deliver": req.params.deliver},
                    function(err, udeal) {
                        res.status(201).json(udeal)
                    });
                }
            }
            else {
                if (req.params.deliver == "any") {
                    UDeal.find({"details.day": req.params.day},
                    function(err, udeal) {
                        res.status(201).json(udeal)
                    });
                }
                else {
                    UDeal.find({"details.day": req.params.day, "details.deliver": req.params.deliver},
                    function(err, udeal) {
                        res.status(201).json(udeal)
                    });
                }
            }  
        }
        else {
            if (req.params.day == "any") {
                if (req.params.deliver == "any") {
                    UDeal.find({"details.tags": req.params.tags},function(err,udeal){
                        res.status(201).json(udeal)
                    });
                }
                else {
                    UDeal.find({"details.deliver": req.params.deliver,"details.tags": req.params.tags},
                    function(err, udeal) {
                        res.status(201).json(udeal)
                    });
                }
            }
            else {
                if (req.params.deliver == "any") {
                    UDeal.find({"details.day": req.params.day,"details.tags": req.params.tags},
                    function(err, udeal) {
                        res.status(201).json(udeal)
                    });
                }
                else {
                    UDeal.find({"details.day": req.params.day, "details.deliver": req.params.deliver,"details.tags": req.params.tags},
                    function(err, udeal) {
                        res.status(201).json(udeal)
                    });
                }
            }
        }
    }