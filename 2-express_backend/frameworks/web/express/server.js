const app = require("./app");
class ExpressServer {
  static start(PORT) {
    app.listen(PORT, () => {
      console.log(`Server is running in port ${PORT}`);
    })
  }

  static webApp() {
    return app;
  }
}
module.exports = ExpressServer;