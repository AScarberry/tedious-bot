const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../../angular-app')));

const { addRoutes } = require('./routes');

addRoutes(app);

app.listen(PORT, () => console.log("Backend running at port " + PORT));