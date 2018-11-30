Launches a server that can be configured to serve web content for multiple projects at once.  To use this package:

1) run 'npm install' to install required dependencies.
2) set the environment variables in the '.env' file in the root directory.
    2.1) PORT - specifies the port on which to launch the server.
    2.2) HTTPS - if true, will launch an https server.  Otherwise launches a http server.  The following options are only used if HTTPS=true.
        2.2.1) HTTP_REDIRECT - if true, creates an http server that redirects http requests to the https server
        2.2.2) HTTP_REDIRECT_PORT - the port to launch the http redirect server (if created)
        2.2.3) CERT - the file location for the https cert relative to the root of this project
        2.2.4) KEY - the file location for the https key relative to the root of this project
3) Add the projects for the server to serve in 'src/web/routes.js'.  
    3.1) As described in the routes.js file, other projects must export an express.Router() object that this project will call to perform project-specific routing.
    3.2) See example code for chained express routers https://stackoverflow.com/questions/23638354/express-router-param-chaining-with-url
    
Note: You can also use this project as a component of another project to start a server by installing ('npm install https://github.com/alsack/node_web_server.git'), setting the env variables as described above, and using code similar to:
    //launch server
    const node_web_server = require('node_web_server/src/index.js');
    //add routes
    node_web_server.app.use('/', (req, res, next) => { ... });
