const { AddFilmsForm } = require('../templates.js');

function get(req, res) {
    // const title = "Add film";
    // const categories = listCategories();
    const content = AddFilmsForm();
    // const body = Layout({ title, content });
    res.send(body);
}

module.exports = { get, post };
