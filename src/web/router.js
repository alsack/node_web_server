const routes = require('./routes.js');

/**
 * Perform project routing
 * @param {ExpressApp} app the express router
 */
module.exports = function(app) {
    for(var route of routes) {
        app.use(route.path, require(route.router));
    }
}