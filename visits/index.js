const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  //  host: 'https://myredis.com' - traditional connection address without docker 
  
  // connect to redis-server in docker
  host: 'redis-server',
  port:6379 // default redis port num, docker will find this one and redirect to redis-server in .yml file
});
client.set('visits', 0); // ensure the init count of visits is 0


app.get('/', (req, res) => {
  process.exit(0); //exit the program each time when request happens, exit code 0 means everything is ok; code 1,2,3...menas sth. went wrong;

  client.get('visits', (err, visits) => {
    // res.send, send the number of visits back to our request.
    // visists come from redis, as a string
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  })
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});