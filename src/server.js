const express = require('express');
const add = require('../routes/');

const server = express();
server.get('/new', add.get);
// server.post('/new', express.urlencoded({ extended: false }), add.post);

module.exports = server;
const staticHandler = express.static('public');
// const { sanitize, content } = require('./templates.js');

// const {
//     listFilms,
//     updateFilms,
//     addUsername,
//     searchByUsername,
//     getUserId,
// } = require('./model/films.js', './model/reviews.js');

server.use(staticHandler);

// const bodyParser = express.urlencoded();

// const postsArr = listFilms();

// server.get('/', (req, res) => {
//     res.send(content(postsArr));
// });

// server.post('/', bodyParser, (req, res) => {
//     const error = {};
//     const username = req.body.username.toLowerCase();
//     const artist = req.body.film;
//     const song = req.body.review;
//     const genre = req.body.genre;
//     const rating = req.body.director;
//     // Adds user input into an array of objects

//     if (!username) {
//         error.username = 'Please enter your username';
//     }
//     if (!artist) {
//         error.artist = 'Please enter the name of the film';
//     }
//     if (!song) {
//         error.song = 'Please enter your review';
//     }
//     if (!director) {
//         error.director = 'Please enter the director of the film ';
//     }
//     if (Object.keys(error).length > 0) {
//         const body = content(postsArr, error, req.body);
//         return res.status(400).send(body);
//     } else {
//         postsArr.push({ genre, film, director, review, username });
//         // check whether username exists

//         // Push the username into user table

//         const user_id = addUsername(username);

//         // Updates the music database with user input. Must use user_id because username doesn't feature on music table.
//         updateFilmList({ genre, film, director, review, user_id });

//         res.redirect('/');
//     }
// });

// // Search by username
// server.post('/search', bodyParser, (req, res) => {
//     const user = req.body.user.toLowerCase();
//     const error = {};
//     // if empty throw error

//     if (!user) {
//         error.user = 'Please enter your username';
//     }

//     if (Object.keys(error).length > 0) {
//         // const body = content(postsArr, error);
//         return res.status(400).send(body);
//     } else {
//         res.redirect(`/search/?username=${user}`);
//     }
// });

// server.get('/search?:user', (req, res) => {
//     // get username from the query
//     const user = req.query.user.toLowerCase();

//     const error = {};

//     // if id doesn't exist redirect to main page

//     // get an array of songs posted by this username
//     let postsByUsername = searchByUsername(user);

//     if (postsByUsername == 'User not found') {
//         error.user = "User doesn't exist";
//     }

//     if (Object.keys(error).length > 0) {
//         const body = content(postsArr, error);
//         return res.status(400).send(body);
//     }

//     res.send(content(postsByUsername, error));
// });

// module.exports = {
//     listFilms,
//     updateFilms,
//     addUsername,
//     searchByUsername,
//     getUserId,
// };
