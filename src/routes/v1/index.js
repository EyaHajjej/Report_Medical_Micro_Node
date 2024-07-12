const express = require('express');
const docsRoute = require('./docs.route');
const reportRoute = require('./Report.route');
const config = require('../../config/config');

const router = express.Router();

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '/reports',
    route: reportRoute,
  },
];

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
