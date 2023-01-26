const { listFilms } = require('../model/films.js');
const { Layout, AddFilmsForm } = require('../src/templates.js');
const { addFilmToDB } = require('../model/films.js');

function get(req, res) {
    const title = 'Add film';
    const films = listFilms();
    const content = AddFilmsForm({ title, films });
    const body = Layout({ title, content });
    res.send(body);
}

function post(req, res) {
    const { name, year, director, genre_id } = req.body;
    // const errors = {};
    // if (!name) {
    //   errors.name = "Please enter a product name";
    // }
    // if (!year) {
    //   errors.year = "Please enter a year";
    // }
    // if (!director) {
    //   errors.director = "Please enter a director";
    // }
    // if (!genre_id) {
    //   errors.genre = "Please select a genre";
    // }
    // if (Object.keys(errors).length > 0) {
    //   const title = "Error: Add film";
    //   const film = listFilms();
    //   const content = AddFilmsForm({ title, film, errors });
    //   const body = Layout({ title, content });
    //   res.status(400).send(body);
    // } else {
    const new_film = { name, year, director, genre_id };
    addFilmToDB(new_film);
    res.redirect('/');
    // }
}

module.exports = { get, post };
