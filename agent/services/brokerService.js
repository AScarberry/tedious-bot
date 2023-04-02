const jsonConfigService = require('../../jsonConfigService');
const config = jsonConfigService.get();
const redis = require('redis');
const client = redis.createClient({
	socket: {
		host: config.redisHost,
		port: config.redisPort
	}
});

const subscriber = client.duplicate();
const publisher = client.duplicate();

class Broker {

	constructor () {
		this.subscriber = subscriber;
		this.publisher = publisher;
		subscriber.connect();
		publisher.connect();
	}

	publish(channel, message) {
		console.log(`Sending message: ${message}, to channel: ${channel}`);
		publisher.publish(channel, message);
	}
}

module.exports = new Broker();