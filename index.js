const server = require('./src/server');
const port = process.env.PORT || '8080';
server.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
