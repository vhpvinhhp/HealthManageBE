const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type : String, require: true },
    email: { type : String, require: true },
    achievement: { type : Number, default: 0 },
    dateCount: { type : Number, default: 0 },
    deleted: { type : Boolean, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'users'});

UserSchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});

mongoose.model('UserModel', UserSchema);

module.exports = mongoose.model('UserModel');