const puppeteer = require('puppeteer');
const { floorOrder } = require('./scripts/flooring');
let browser, page;

const pageHandler = {
	flooring: floorOrder
};

module.exports.automate = async (message) => {
	console.log('Agent Starting...');
	try {
		browser = await puppeteer.launch({
			headless: true,
			defaultViewport: {
				width: 1920,
				height: 1080
			},
			args: ['--ignore-certificate-errors', '--enable-logging', '--v=1', '--disable-dev-shm-usage', '--disable-gpu', '--no-sandbox']
		});
		page = await browser.newPage();
		const result = await pageHandler[message.topic](page, message.data);
		browser.close();
		return { 'message': message.topic, result };
	} catch (error) {
		console.log("There was an issue trying to automate the request", error);
		this.kill(message);
	}
};

module.exports.kill = async (message) => {
	try {
		console.log(`Killing Agent, ${message}`);
		await page.close();
		await browser.close();
	} catch (error) {
		console.log("There was an issue trying to kill the agent...");
	}
};