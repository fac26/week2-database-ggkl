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

function Table({ caption, data }) {
    const keys = Object.keys(data[0]);
    return /*html*/ `
    <div class="table-wrapper">
      <table>
        <caption>${caption} <small>(${data.length})</small></caption>
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

// const content = (posts, error = {}, value = {}) => {
//     return /*html*/ `<!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width">
//           <meta charset="utf-8">
//           <link rel="stylesheet" href="./public/style.css" />
//           <link href= "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
//             <title>Film reviews</title>

//       </head>
//       <body>
//       <main>
//       <h1>Post new Review</h1>
//       <form method="POST" action="/" class="submit-form">
//         <label for="username">Username</label>
//         <input type="text" name="username" id="username" maxLength="15" value='${
//             value.username ? value.username : ''
//         }'>
//         ${validation(error.username)}
//         <label for="artist">Film</label>
//         <input type="text" name= "film" id="film" maxLength="50" value='${
//             value.film ? value.film : ''
//         }'>
//         ${validation(error.film)}
//         <label for="review">Review</label>
//         <input type="text" name="review" id="review" maxLength="100" value='${
//             value.review ? value.review : ''
//         }'>
//         ${validation(error.review)}
//         <label for="genre">Genre</label>
//         <input type="text" name="genre" id="genre" maxLength="20" value='${
//             value.genre ? value.genre : ''
//         }'>
//         ${validation(error.genre)}
//         <label for="rating">Director</label>
//         <input type="range" name="director" id="director" min="0" max="50" value='${
//             value.director ? value.director : ''
//         }'>
//         ${validation(error.director)}
//         <button>Post</button>
//         </form>
//         <form method="GET" action="/search">
//         <h3>or search by <input name="user" placeholder="username">
//         ${validation(error.user)}
//         </h3>
//         </form>
//         <h2>All posts</h2>
//         <ul class="grid-container">
//           ${posts.reverse().map(postItem).join('')}
//         </ul>
//         </main>
//         <footer>
//                 <p>@2023 Gareth Georgia Konstantina Laura</p>
//               </footer>
//         </body>
//         </html>
//   `;
// };
