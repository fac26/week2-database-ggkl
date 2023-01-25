module.exports = { Layout, AddFilmsForm };

function Layout({ title, content }) {
    return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>
          <style>${styles}</style>
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

function AddFilmsForm() {
    return /*html*/ `
    <h1>Form</h1>
    <form method="POST">
      <p>
        <label for="name">Name</label>
        <input name="name" id="name">
        
      </p>
      <p>
        <label for="qty">Quantity per unit</label>
        <input name="quantity_per_unit" id="qty">
      </p>
      <p>
        <label for="price">Unit price</label>
        <input name="unit_price" id="price" type="number" step="0.01">
      </p>
      <p>
        <label>Category</label>
        <select name="category_id">
        </select>
      </p>
      <button>Create &plus;</button>
    </form>
`;
}

module.exports = { AddFilmsForm };
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
