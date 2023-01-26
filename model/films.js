const db = require("../database/db.js");



const select_films = db.prepare(/*sql*/ `
  SELECT
    id,
    name
  FROM films
`);

function listFilms() {
  return select_films.all();
}

// const select_film = db.prepare(/*sql*/ `
//   SELECT
//     films.id,
//     films.name,
//     genres.genre_name AS genre_name,
//   FROM films
//   JOIN genres ON films.genre_id = genres.id
//   WHERE products.id = ?
// `);

// function getFilm(id) {
//   return select_film.get(id);
// }

// const search_films = db.prepare(/*sql*/ `
//   SELECT
//     id,
//     name
//   FROM products
//   WHERE name LIKE ?
// `);

// function searchProducts(search_term) {
//   return search_products.all("%" + search_term + "%");
// }

// const insert_film = db.prepare(/*sql*/ `
//   INSERT INTO films (name, year, director, genre_id)
//   VALUES(
//     $name,
//     $year,
//     $director,
//     $genre_id,
//   )
//   RETURNING id
// `);

// function createFilm(film) {
//   return insert_film.get(film);
// }


module.exports = { listFilms };