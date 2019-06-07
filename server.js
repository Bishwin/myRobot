const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(()=> {
    console.log('successfully connected to the database');
}).catch(error => {
    console.log('could not connect ', error);
    process.exit();
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));