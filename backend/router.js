//const testController=require('./controllers/test-controller'),
const udealsController=require('./controllers/udeals.controller'),
express = require('express');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    const udealRoutes = express.Router();
    udealRoutes.get('/',udealsController.getUDeals);
    udealRoutes.get('/:_id',udealsController.findUDeal);
    udealRoutes.get('/tags/:tags',udealsController.findByTag);
    udealRoutes.get("/:recurring", udealsController.findUDealTest);
    //udealRoutes.get('/:id',udealController.getUser);
    udealRoutes.post('/',udealsController.createUDeal);
    udealRoutes.put('/',udealsController.editUDeal);
    udealRoutes.delete('/',udealsController.deleteUDeal);

    apiRoutes.use('/udeals',udealRoutes);


    //apiRoutes.get('/test', testController.test);
    //attach router to root
    app.use('/api', apiRoutes);
};