const insert = require('./crud/insert');
const read = require('./crud/read');
const update = require('./crud/update');
const del = require('./crud/delete');
const agg = require('./crud/agg');

(async () => {
    const insertUser = await insert.insertUser({name: "Nolan McCaffrey", email: "mccaffrey.nolan@gmail.com"})
    console.log("New user inserted", insertUser);

    const christopherNolanMovies = await read.findMovieByDirector("Christopher Nolan");
    console.log("Christopher Nolan movies", christopherNolanMovies);

    const actionMovies = await read.findActionMoviesByYear();
    console.log("Action movies by year", actionMovies);

    const highRatedMovies = await read.findHighRatedMovies();
    console.log("High rated movies", highRatedMovies);

    const moviesWithActors = await read.findMoviesByActors(["Tom Hanks", "Tim Allen"]);
    console.log("Tom Hanks and Tim Allen movies", moviesWithActors);

    const moviesWithActorsOnly = await read.findMoviesByActorsOnly(["Tom Hanks", "Tim Allen"]);
    console.log("Only Tom Hanks and Tim Allen movies", moviesWithActorsOnly);

    const comedyMoviesBySpielsberg = await read.findComedyMoviesBySpielberg("Steven Spielberg");
    console.log("Comedy movies by Steven Spielberg", comedyMoviesBySpielsberg);

    const addAvailablePlatform = await update.updateAddField("The Matrix", "Sflix");
    console.log("Add available on field", addAvailablePlatform);

    const incMetaMatrix = await update.incrementMetaMatrix("The Matrix");
    console.log("Increment The Matrix metacrtic by 1", incMetaMatrix);

    const addGenreTo1997 = await update.addGenreTo1997("Gen Z");
    console.log("Add genre to year 1997", addGenreTo1997);

    const incRatingBy1 = await update.incRatingBy1();
    console.log("Increase imdb rating by 1 for movies with rating less than 5", incRatingBy1);

    const deleteComment = await del.deleteComment("5a9427648b0beebeb69579e7");
    console.log("Delete comment", deleteComment);

    const deleteMatrixComments = await del.deleteAllMatrixComments("The Matrix");
    console.log("Deleted all The Matrix Comments", deleteMatrixComments.deletedCount);

    const deleteMoviesNoGenre = await del.deleteMoviesNoGenre();
    console.log("Deleted movies with no genre:", deleteMoviesNoGenre.deletedCount);

    const moviesPerYear = await agg.countMoviesPerYear();
    console.log("Movies per year:", moviesPerYear);

    const avgRatingbyDirector = await agg.avgRatingbyDirector();
    console.log("Average rating by director:", avgRatingbyDirector);
})();