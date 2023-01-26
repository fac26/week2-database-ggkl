const test = require('node:test');
const assert = require('node:assert');
const server = require('../src/server');

//test if POST request posts the right data on the page
test('/submit route responds to POST requests', async () => {
    const app = server.listen(8080);

    const response = await fetch('http://localhost:8080', {
        method: 'POST',
        body: ' ',
        headers: {
            '': ' ',
        },
    });
    app.close();

    assert.equal(response.status, 200);
    const body = await response.text();
    assert.match(body, /Jaws/);
});
