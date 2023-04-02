const express = require('express');
const requestController = require('../../controllers/requestController');
const requestRouter = express.Router();

requestRouter.post('/request', requestController.request);

module.exports = requestRouter;