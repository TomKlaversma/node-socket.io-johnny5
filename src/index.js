import express from 'express';
const app = express();
const http = require('http').Server(app);

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.send(__dirname + '/index.html')
);

http.listen(3000, () =>
  console.log('listening on *:3000')
);
