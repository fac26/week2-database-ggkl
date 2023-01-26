const test = require('node:test');
const assert = require('node:assert');
const server = require('../src/server');
//test if the home route displays the correct page
test('home route returns expected info', async () => {
    const app = server.listen(8080);
    const response = await fetch('http://localhost:8080');
    app.close();

    assert.equal(response.status, 200);
    const body = await response.text();
    assert.match(body, /Film/);
});
