const requestRoute = require('./api/request');

module.exports.addRoutes = (app) => {
    app.use(
        '/api',
        requestRoute
    );
};