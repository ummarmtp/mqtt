const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/data', (req, res) => {
  console.log('Received JSON:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});
s