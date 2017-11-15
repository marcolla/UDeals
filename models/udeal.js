const mongoose = require('mongoose'),  
Schema = mongoose.Schema;

var dealSchema = mongoose.Schema({
    offer: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    details: {
        name: {type: String},
        addresss: {type: String},
        day: {type: String},
        time: {type: String},
        description: {type: String},
        deliver: {type: Boolean},
        link: {type: String},
        recurring: {type: Boolean}
    }
});

module.exports = mongoose.model('Deal', dealSchema);