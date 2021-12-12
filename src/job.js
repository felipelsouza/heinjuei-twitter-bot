const tweetController = require('./controllers/tweet.controller');

const CronJob = require('cron').CronJob;

const job = new CronJob(
  '0 */1 * * *',
  // '*/5 * * * * *',
  async () => {
    await tweetController.generateTweet();
  },
  null,
  true,
  'America/Sao_Paulo'
);

module.exports = job;
