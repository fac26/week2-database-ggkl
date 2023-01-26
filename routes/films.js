const { Layout, Table } = require('../src/templates.js');
// const { listGenres } = require('../model/genres.js');
const { listFilms } = require('../model/films.js');

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
