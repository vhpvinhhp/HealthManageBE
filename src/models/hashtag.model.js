const mongoose = require('mongoose');

const HashtagSchema = new mongoose.Schema({
    name:  { type : String, require: true },
    deleted: { type : Boolean, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'hashtags'});

HashtagSchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});

mongoose.model('HashtagModel', HashtagSchema);

module.exports = mongoose.model('HashtagModel');