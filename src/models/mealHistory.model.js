const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const MealHistorySchema = new mongoose.Schema({
    userId:  { type : String, require: true },
    name:  { type : String, require: true },
    image:  { type : String, require: true },
    type:  { type : String, enum : ['morning', 'lunch', 'dinner', 'snack'], require: true },
    deleted: { type : String, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'meal_histories'});

MealHistorySchema.plugin(mongoosePaginate);
MealHistorySchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});

mongoose.model('MealHistory', MealHistorySchema);

module.exports = mongoose.model('MealHistory');