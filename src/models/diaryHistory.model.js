const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const DiaryHistorySchema = new mongoose.Schema({
    userId:  { type : String, require: true },
    title:  { type : String, require: true },
    content:  { type : String, require: true },
    deleted: { type : String, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'diary_histories'});

DiaryHistorySchema.plugin(mongoosePaginate);
DiaryHistorySchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});



mongoose.model('DiaryHistoryModel', DiaryHistorySchema);

module.exports = mongoose.model('DiaryHistoryModel');