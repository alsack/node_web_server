Launches a web server 

1) import this project into your project "npm install https://github.com/alsack/node_web_server.git"
2) Create a '.env' file in your project root directory.  Minimally specify:
  PORT=<PortNumber>
  HTTPS=false
  2.a) if using HTTPS, specify:
    HTTP_REDIRECT=false  //if you want http connections to be redirected
    HTTP_REDIRECT_PORT=  //the port that http connections are listening on
    CERT=certs/certificate.pem  //path to certificate
    KEY=certs/key.pem           //path to key
3) example usage:
  const nodeWebServer = require('node_web_server');
  nodeWebServer.app.use('*', (req, res) => { res.send('Hello World') });
