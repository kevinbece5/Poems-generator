const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./db');
const cors = require('cors')
const path = require('path')


db.setup();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.resolve(__dirname, '../dist/')));

app.use(routes);
app.listen(port, () => {
    console.log(`running on port ${port}`)
})