const connectDB = require('../db');

async function updateAddField(title, platform) {
    const db = await connectDB();
    return db.collection('movies').updateOne({ title, available_on: { $exists: false } }, { $set: { available_on: platform } } );
}

async function incrementMetaMatrix(title) {
    const db = await connectDB();
    return db.collection('movies').updateOne({ title}, { $inc: { metacritic: 1 } } );
}

async function addGenreTo1997(genre) {
    const db = await connectDB();
    return db.collection('movies').updateMany({ year: 1997 }, { $addToSet: { genres: genre } } );
}

async function incRatingBy1() {
    const db = await connectDB();
    return db.collection('movies').updateMany({ "imdb.rating": {$lt: 5 } }, { $inc: { "imdb.rating": 1 } } );
}

module.exports = {
    updateAddField,
    incrementMetaMatrix,
    addGenreTo1997,
    incRatingBy1
};