## Tedious Bot

An RPA application that completes custom, repetitive tasks, that you can tailor and create to your needs (~~some~~ much assembly required).


### Redis

Install redis on your machine

> https://redis.io/docs/getting-started/installation/

Start the Redis server, from the terminal
```
redis-server
```

### Running the application

There are 3 projects for this application

1. Agent
   1. Runs web automation using puppeteer.
   2. Takes requests from a Redis subscriber and runs the agent based on the message received by the subscriber.
2. Backend
   1. Communicates between the UI and the agent via Express and Redis.
3. Angular Frontend
   1. User interface for making requests to the agent.
----

#### Install Agent and run

> cd agent && npm install

To start the agent, from the root directory ('tediousbot/'):

```bash
cd agent && npm run start 
```
or

```bash
npm run start:agent
```

#### Install Backend and run

> cd backend && npm install

To start the backend, from the root directory ('tediousbot/'):
```bash
cd backend && npm run start
```
or

```bash
npm run start:backend
```

#### Install Frontend and run

> cd angular-app && npm install

To start the angular frontend, from the root directory ('tediousbot/'):
```bash
cd angular-app && npm run start
```
or

```bash
npm run start:angular
```
