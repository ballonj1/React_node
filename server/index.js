const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
});

//app represents the underlying express server
//app.get creates a new route handler
// '/' watches for an incoming HTTP request with a very specific method
// res.send({ hi: 'there' }) -> close the request

app.listen(5000);
// tells node that we want to listen on the port 5000
