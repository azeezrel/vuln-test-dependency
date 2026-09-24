const express = require('express');
const _ = require('lodash');

const app = express();

app.get('/', (req, res) => {
  const obj = { a: 1, b: 2 };
  res.send('Sum: ' + _.sum(Object.values(obj)) );
});

app.listen(3000, () => console.log('Server listening on 3000'));
