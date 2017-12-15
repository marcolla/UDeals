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
        day: {type: [String]},
        time: {type: String},
        description: {type: String},
        deliver: {type: Boolean},
        link: {type: String},
        recurring: {type: Boolean},
        tags: {type: [String]}
    }
});

dealSchema.methods.speak = function () {
    var greeting = this.details.name
      ? "Meow name is " + this.details.name
      : "I don't have a name";
      console.log(greeting);
}
module.exports = mongoose.model('Deal', dealSchema);