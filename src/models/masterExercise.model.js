const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const MasterExerciseSchema = new mongoose.Schema({
    name:  { type : String, require: true },
    deleted: { type : Boolean, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'master_exercise'});

MasterExerciseSchema.plugin(mongoosePaginate);
MasterExerciseSchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});

mongoose.model('MasterExerciseModel', MasterExerciseSchema);
module.exports = mongoose.model('MasterExerciseModel');