const { ObjectId } = require('mongodb');
const connectDB = require('../db');

async function deleteComment(id) {
    const db = await connectDB();
    return db.collection('comments').deleteOne({ _id: new ObjectId(id) });
}

async function deleteAllMatrixComments(title) {
    const db = await connectDB();
    const movie = await db.collection('movies').findOne({ title });

    if (!movie) {
        console.log(`No movie found with title "${title}".`);
        return { deletedCount: 0 };
    }

    return db.collection('comments').deleteMany({ movie_id: movie._id });
}

async function deleteMoviesNoGenre() {
    const db = await connectDB();
    return db.collection('movies').deleteMany({
        $or: [
        { genres: { $exists: true, $size: 0 } },
        { genres: { $exists: false }}
        ]    
});
}

module.exports = {
    deleteComment,
    deleteAllMatrixComments,
    deleteMoviesNoGenre
}