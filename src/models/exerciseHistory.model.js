const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
require('./masterExercise.model');

const ExerciseHistorySchema = new mongoose.Schema({
    userId:  { type : String, require: true },
    exercise:  { type : String, require: true, ref: 'MasterExerciseModel' },
    time: { type : Number, require: true },
    cal: { type : Number, require: true },
    deleted: { type : String, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'exercise_histories'});

ExerciseHistorySchema.plugin(mongoosePaginate);
ExerciseHistorySchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});

mongoose.model('ExerciseHistoryModel', ExerciseHistorySchema);
module.exports = mongoose.model('ExerciseHistoryModel');