const fs = require("fs");
const brokerService = require("./services/brokerService");
const agent = require("./agent.js");
const { possibleMessages } = require('./constants');

checkBroker = async () => {
	console.log("Checking messages from broker...");
	try {
		if (!fs.existsSync('screenshots')) {
			fs.mkdirSync('screenshots');
		}
		brokerService.subscriber.subscribe('new_request', async (message) => {
			console.log(`New request, with message: `, message);
			const request = JSON.parse(message);
			if (Object.values(possibleMessages).indexOf(request.topic) > -1) {
				const result = await agent.automate(request);
				brokerService.publish('agent', JSON.stringify(result));

				//To Test without agent call
				// const result = { "message": "flooring", "result": "Picked Up" };
				// setTimeout(() => {
				// 	brokerService.publish('agent', JSON.stringify(result));

				// }, 3000);
			} else {
				brokerService.publish('agent', 'Invalid Message...');
			}
		});
	} catch (error) {
		brokerService.publish('agent', JSON.stringify(error));
	}
};

checkBroker();