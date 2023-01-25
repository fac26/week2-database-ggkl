const db = require("../database/db.js");

module.exports = { listGenres };

const select_genres = db.prepare(/*sql*/ `
  SELECT id, genre_name FROM genres
`);

function listGenres() {
  return select_genres.all();
}
