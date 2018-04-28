const express = require('express');
const app = express();

app.get('/:user', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    user: req.params.user,
    query: req.query
  }));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));