const CronJob = require('cron').CronJob;

const tweetController = require('./controllers/tweet.controller');
const pingController = require('./controllers/ping.controller');

const tweetJob = new CronJob(
  // '0 */1 * * *',
  '*/5 * * * *',
  async () => {
    await tweetController.generateTweet();
  },
  null,
  true,
  'America/Sao_Paulo'
);

const keepAppRunningJob = new CronJob(
  '20,40 */1 * * *',
  async () => {
    await pingController.ping();
  },
  null,
  true,
  'America/Sao_Paulo'
);

module.exports = { tweetJob, keepAppRunningJob };
