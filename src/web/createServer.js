const express = require('express');
const http = require('http');

/**
 * Create a http or https server on the given port.  
 * If sslKeys are provided a https server is created, with a http redirect to https
 * @param {Number} port (required) the port to start the http/s server on
 * @param {Object} sslKeys (optional) an object holding the cert/key file locations for ssl
 * @param {String} sslKeys.cert the absolute path to the https cert file
 * @param {String} sslKeys.key the absolute path to the https key file
 * @param {Number} httpPort (optional) the port to serve the http redirect to https.  Only used if
 * an https server is created.
 */
module.exports = function createServer(port, sslKeys) {
  //create http server
  const app = express();
  const server = sslKeys ? createHttpsServer(sslKeys, app) : createHttpServer(app);

  //launch server
  server.listen(port, (err) => {
    var serverType = (process.env.HTTPS === 'true') ? 'https' : 'http';
    if(err) {
      return console.log('server error', err);
    }
    console.log(serverType + ` server listening on port ${port}`);
  });
  return { app, server };
}

// creates an HTTPS server with sslKeys.fullchain path and
// sslKeys.privkey path.  Also create a HTTP server and redirct
// all traffic to the HTTPS server
function createHttpsServer(sslKeys, app) {
  const https = require('https');

  if(process.env.HTTP_REDIRECT === 'true') {
    const httpPort = process.env.HTTP_REDIRECT_PORT;
    //create http server and redirect all traffic to https
    const httpApp = express();
    // set up a route to redirect http to https
    httpApp.use('*', function (req, res, next) {
      res.redirect('https://' + req.headers.host + req.url);
    });
    // have it listen on the specified port
    httpApp.listen(httpPort, (err) => {
      if (err) {
        return console.log("http server error: ", err);
      }
      console.log('http redirect server started on port ' + httpPort);
    });
  }

  return https.createServer(sslKeys, app);
}

// creates an HTTP server
function createHttpServer(app) {
  return http.createServer(app);
}

