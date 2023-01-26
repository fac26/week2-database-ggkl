const db = require("../database/db.js");



const select_genres = db.prepare(/*sql*/ `
  SELECT id, genre_name FROM genres
`);

function listGenres() {
  return select_genres.all();
}

module.exports = { listGenres };