function Layout({ title, content }) {
    return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
            <link rel="stylesheet" href="/style.css" />
            <link href= "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
          <title>${title}</title>
          <style></style>
        </head>
        <body>
          <div class="layout">
            <nav>
              <ul>
                <li>
                  <a href="/">Film reviews</a>
                  <ul>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/new">Add new</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <main>
              ${content}
            </main>
          </div>
        </body>
      </html>
    `;
}

function Table({ data }) {
    const keys = Object.keys(data[0]);
    return /*html*/ `
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          ${keys.map((key) => `<th>${key}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${data.map(Row).join('')}
      </tbody>
    </table>
  </div>
`;
}

function Row(entry) {
    return /*html*/ `
    <tr>
      ${Object.values(entry)
          .map((val) => `<td>${val}</td>`)
          .join('')}
    </tr>
  `;
}

function AddFilmsForm(title) {
    return /*html*/ `
    <h1>${title}</h1>
    <form method="POST">
      <p>
        <label for="name">Name</label>
        <input name="name" id="name">
        
      </p>
      <p>
        <label for="year">Year</label>
        <input name="year" id="year" type="number">
      </p>
      <p>
        <label for="director">Director</label>
        <input name="director" id="director">
      </p>
      <p>
        <label>Genre</label>
        <select name="genre_id">
        </select>
      </p>
      <button>Create &plus;</button>
    </form>
`;
}

module.exports = { Layout, Table, AddFilmsForm };
