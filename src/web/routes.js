const path = require('path');
const rootDir = path.resolve(__dirname, '../..'); //the root of the node_web_server project.

/**
 * This module defines the routes to different projects. It exports an Array of objects
 * defining the route path, and the router for that application.  Example:
 * {
 *      path: '/example',
 *      router: path.resolve(rootDir, '../ExampleProject/src/web/router.js')
 * }
 * In this example, 'path' is the route path for the root express app.
 * router must be a express.Router() object.
 */

const routes = [];

module.exports = routes;
