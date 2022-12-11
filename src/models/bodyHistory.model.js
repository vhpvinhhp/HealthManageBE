const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const BodyHistorySchema = new mongoose.Schema({
    userId:  { type : String, require: true },
    weight: { type : Number, require: true },
    fat: { type : Number, require: true },
    deleted: { type : String, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'body_histories'});

BodyHistorySchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});

mongoose.model('BodyHistoryModel', BodyHistorySchema);
module.exports = mongoose.model('BodyHistoryModel');