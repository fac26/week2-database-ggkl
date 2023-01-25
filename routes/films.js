const { listFilms } = require("../model/films.js");
const { Layout, Table } = require("../src/templates.js");

function get(req, res) {
  const products = listFilms();
  let title = "";
  let content = "";
  if (!products.length) {
    res.status(404);
    title = "No films found";
    content = "<h1>No films found</h1>";
  } else {
    title = "Films";
    content = Table({ caption: title, data: products });
  }
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
