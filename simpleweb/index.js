const express = require('express');

const app = express();

// everytime visit the home route, it will send "hi there"
app.get('/', (req, res) => {
  res.send('Bye there');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});