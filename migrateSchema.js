const hashtagModel = require("./src/models/hashtag.model");
const postModel = require("./src/models/post.model");
require('./src/datasources/mogodb.datasource');

async function insertHashTags() {
    return await hashtagModel.create([{ name : 'HDA'}]);
}

async function insertPosts(tags) {
    return await postModel.create([
        {
            title: 'Lorem Picsum 1',
            image: 'https://picsum.photos/id/238/200/300',
            hashtags: tags
        },
        {
            title: 'Lorem Picsum 1',
            image: 'https://picsum.photos/id/236/200/300',
            hashtags: tags
        },
        {
            title: 'Lorem Picsum 3',
            image: 'https://picsum.photos/id/237/200/300',
            hashtags: tags
        }
    ]);
}

async function main() {
    console.log('Migrate Start');
    const hashtags = await insertHashTags()
    await insertPosts(hashtags.map(tag => tag.name));
    console.log('Migrate Success');
    process.exit();
}
main();