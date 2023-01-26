<<<<<<< HEAD
const { Layout, Table } = require('../src/templates.js');
// const { listGenres } = require('../model/genres.js');
const { listFilms } = require('../model/films.js');
=======
const { listFilms } = require("../model/films");
const { Layout, Table } = require("../src/templates");
>>>>>>> 72fd28c248e6ef5ce3510c375fc8d87d24d8e209

function get(req, res) {
    const films = listFilms();
    let title = '';
    let content = '';
    if (!films.length) {
        res.status(404);
        title = 'No films found';
        content = '<h1>No films found</h1>';
    } else {
        title = 'Films';
        content = Table({ data: films });
    }
    const body = Layout({ title, content });
    res.send(body);
}

module.exports = { get };
