const express = require('express');
const bodyParser = require('body-parser');

const sentiment = require('./routes/sentiment');

const app = express();

app.use(bodyParser.json());
 
app.use('/api/v1/sentiment', sentiment);

const port = 5000;
app.listen(port, () => console.log('App listening on port ' + port));