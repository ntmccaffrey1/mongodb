const connectDB = require('../db');

async function findMovieByDirector(name) {
    const db = await connectDB();
    return db.collection('movies')
        .find({ directors: name })
        .toArray();
}

async function findActionMoviesByYear() {
    const db = await connectDB();
    return db.collection('movies')
        .find({ genres: "Action" })
        .sort({ year: -1 })
        .toArray();
}

async function findHighRatedMovies() {
    const db = await connectDB();
    return db.collection('movies')
        .find({ 'imdb.rating': { $gt: 8 } }, { projection: { title: 1, imdb: 1 } })
        .toArray();
}

async function findMoviesByActors(actors) {
    const db = await connectDB();
    return db.collection('movies')
        .find({ cast: { $all: actors } })
        .toArray();
}

async function findMoviesByActorsOnly(actors) {
  const db = await connectDB();
  return db.collection('movies')
    .find({ cast: { $all: actors, $size: actors.length } })
    .toArray();
}

async function findComedyMoviesBySpielberg(name) {
    const db = await connectDB();
    return db.collection('movies')
        .find({ genres: "Comedy", directors: name })
        .toArray();
}

module.exports = {
    findMovieByDirector,
    findActionMoviesByYear,
    findHighRatedMovies,
    findMoviesByActors,
    findMoviesByActorsOnly,
    findComedyMoviesBySpielberg
};