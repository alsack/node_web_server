nodeWebServer = require('../src/index');

nodeWebServer.app.use('*', (req, res) => {
  res.status(200).send('hello world');
});