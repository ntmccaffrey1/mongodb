const connectDB = require('../db');

async function countMoviesPerYear() {
    const db = await connectDB();
    return db.collection('movies').aggregate([
        { $group: { _id: "$year", count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]).toArray();
}

async function avgRatingbyDirector() {
    const db = await connectDB();
    return db.collection('movies').aggregate([
        { $match: { "imdb.rating": { $exists: true, $ne: null } } },
        { $unwind: "$directors" },
        { $group: {
            _id: "$directors",
            avgRating: { $avg: "$imdb.rating" },
            count: { $sum: 1 }
        }},
        { $sort: { avgRating: -1 } }
    ]).toArray();
}

module.exports = {
    countMoviesPerYear,
    avgRatingbyDirector
}