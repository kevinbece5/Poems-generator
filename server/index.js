const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./db');

db.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(routes);
app.listen(port, () => {
    console.log(`running on port ${port}`)
})