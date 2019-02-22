Launches a web server 

1) import this project into your project "npm install git@github.com:alsack/node_web_server.git"
2) example usage:
  const createServer = require('node_web_server');
  {app, server} = createServer(8080);
  app.use('*', (req, res) => { res.send('Hello World') });
