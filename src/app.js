const express = require('express');
const cors = require('cors');
const { tweetJob, keepAppRunningJob } = require('./job');

const app = express();

app.use(cors());

app.use(express.json());

app.set(tweetJob);
app.set(keepAppRunningJob);

app.get('/', (req, res) => {
  res.send('Heinjuei Bot');
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
