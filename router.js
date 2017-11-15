//const testController=require('./controllers/test-controller'),
udealsController=require('./controllers/udeals.controller'),
express = require('express');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    const udealRoutes = express.Router();
    udealRoutes.get('/',udealsController.getUDeals);
    //udealRoutes.get('/:id',udealController.getUser);
    udealRoutes.post('/',udealsController.createUDeal);

    apiRoutes.use('/udeals',udealRoutes);


    //apiRoutes.get('/test', testController.test);
    //attach router to root
    app.use('/api', apiRoutes);
};