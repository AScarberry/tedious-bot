const brokerService = require('../services/brokerService');
const httpStatus = require('http-status');

module.exports.request = async (req, res) => {
    try {
        const message = req.body;
        if (message) {
            await brokerService.publish('new_request', JSON.stringify(message));
            await brokerService.subscriber.subscribe('agent', (result) => {
                res.status(httpStatus.OK);
                res.json(JSON.parse(result));
                brokerService.subscriber.unsubscribe('agent');
            });
        } else {
            res.sendStatus(httpStatus.BAD_REQUEST);
        }

    } catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};
