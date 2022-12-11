const bodyHistoryModel = require("./src/models/bodyHistory.model");
const diaryHistoryModel = require("./src/models/diaryHistory.model");
const exerciseHistoryModel = require("./src/models/exerciseHistory.model");
const hashtagModel = require("./src/models/hashtag.model");
const masterExerciseModel = require("./src/models/masterExercise.model");
const mealHistoryModel = require("./src/models/mealHistory.model");
const postModel = require("./src/models/post.model");
const userModel = require("./src/models/user.model");
require('./src/datasources/mogodb.datasource');

async function resetdb() {
    await bodyHistoryModel.deleteMany();
    await diaryHistoryModel.deleteMany();
    await exerciseHistoryModel.deleteMany();
    await hashtagModel.deleteMany();
    await masterExerciseModel.deleteMany();
    await mealHistoryModel.deleteMany();
    await postModel.deleteMany();
    await userModel.deleteMany();
    return 'Success';
}
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

async function insertUser() {
    return await userModel.create({
        username: 'Demo',
        email: 'example@gmail.com',
        achievement: 5,
        dateCount: 21,
    });
}

async function insertRecord(userId) {
    await mealHistoryModel.create([
        {
            userId,
            name: 'Lorem Ipsum 1',
            image: 'https://picsum.photos/id/238/200/300' ,
            type: 'morning',
        },
        {
            userId,
            name: 'Lorem Ipsum 2',
            image: 'https://picsum.photos/id/238/200/300' ,
            type: 'lunch',
        },
        {
            userId,
            name: 'Lorem Ipsum 3',
            image: 'https://picsum.photos/id/238/200/300' ,
            type: 'dinner',
        },
        {
            userId,
            name: 'Lorem Ipsum 4',
            image: 'https://picsum.photos/id/238/200/300' ,
            type: 'snack',
        },
        {
            userId,
            name: 'Lorem Ipsum 5',
            image: 'https://picsum.photos/id/238/200/300' ,
            type: 'morning',
        }
    ]);
    const masterExercise = await masterExerciseModel.create({ name: 'Lorem Ipsum exercise 1' });
    await exerciseHistoryModel.create([
        {
            userId,
            exercise: masterExercise._id.toString(),
            time: 10,
            cal: 26,
        },
        {
            userId,
            exercise: masterExercise._id.toString(),
            time: 20,
            cal: 36,
        }
    ]);
    await bodyHistoryModel.create([
        {
            userId,
            weight: 10,
            fat: 160,
        },
        {
            userId,
            weight: 20,
            fat: 160,
        }
    ]);
    await diaryHistoryModel.create([
        {
            userId,
            title: 'Lorem Ipsum 1',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' ,
        },
        {
            userId,
            title: 'Lorem Ipsum 2',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' ,
        }
    ]);
}

async function main() {
    try {
        console.log('------ Migrate Start -------');
        console.log('Reset data: ', await resetdb()); 
        const hashtags = await insertHashTags();
        const user = await insertUser();
        await insertPosts(hashtags.map(tag => tag.name));
        await insertRecord(user._id.toString());

        console.log('New UserId: ', user._id.toString());
        console.log('------ Migrate Success -------');
        process.exit();
    } catch (error) {
        console.log(error);
        console.log('------ Migrate Failed -------');
        process.exit();
    }
}
main();