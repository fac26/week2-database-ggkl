const { Layout } = require("../templates.js");
const { getFilm } = require("../model/films.js");

function get(req, res) {
  const id = req.params.id;
  const film = getFilm(id);
  let title = "";
  let content = "";
  if (!film) {
    res.status(404);
    title = "Product not found";
    content = "<h1>Product not found</h1>";
  } else {
    title = film.name;
    content = /*html*/ `
      <h1>${film.name}</h1>
      <span>${film.genre_name}</span>
    `;
  }
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
