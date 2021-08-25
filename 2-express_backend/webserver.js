// This is not invoked here to separate the app.listen while can still run unit test on the abstraction
// It is because Jest and Supertest MUST not run on the script with app.listen on Express
// This way the unit test can run on the abstraction of server, instead of directly go to express server
const Server = require('./frameworks/web/express/server');

module.exports = Server;