const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PostsSchema = new mongoose.Schema({
    title:  { type : String, require: true },
    image:  { type : String, require: true },
    hashtags:  [{ type: String }],
    deleted: { type : Boolean, default: false },
    updatedAt: { type : Date, default: new Date() },
    createdAt: { type : Date, default: new Date() },
},
{ timestamps: true , collection: 'posts'});

PostsSchema.plugin(mongoosePaginate);
PostsSchema.pre('update', function(next) {
    this.update({ updatedAt: new Date() });
    next();
});

mongoose.model('PostModel', PostsSchema);

module.exports = mongoose.model('PostModel');