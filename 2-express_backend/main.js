const webServer = require('./webserver');
// This is just the abstraction of the server start being invoked
// this is to make the server itself separate from express so the app is not dependent on express
// that way if we want to change express, we don't need to touch this and just need to abstract
// the new framework to start with the same way we do here
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'test') {
  webServer.start(PORT);
};