const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/data', db.getData);
app.get('/data/:id', db.getDataById);
app.use(express.static("main"));


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

