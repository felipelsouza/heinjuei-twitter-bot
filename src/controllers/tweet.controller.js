const { format } = require('date-fns');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('db.json');
const db = low(adapter);
const client = require('../config/twitter');

const getValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateTweet = async () => {
  const bases = (await db).get('base_sentence').value();
  const names = (await db).get('name').value();
  const adjectives = (await db).get('adjective').value();
  const objects = (await db).get('object').value();
  const dates = (await db).get('date').value();
  const actions = (await db).get('action').value();
  const presentActions = (await db).get('present_action').value();
  const supportSentences = (await db).get('support_sentence').value();
  const verbs = (await db).get('verb').value();

  let sentence = bases[Math.floor(Math.random() * bases.length)];
  sentence = sentence.replace(/{name}/g, () => getValue(names));
  sentence = sentence.replace(/{adjective}/g, () => getValue(adjectives));
  sentence = sentence.replace(/{object}/g, () => getValue(objects));
  sentence = sentence.replace(/{date}/g, () => dates[new Date().getDay()]);
  sentence = sentence.replace(/{currentDate}/g, () => format(new Date(), 'dd/MM/yyyy'));
  sentence = sentence.replace(/{action}/g, () => getValue(actions));
  sentence = sentence.replace(/{presentAction}/g, () => getValue(presentActions));
  sentence = sentence.replace(/{supportSentence}/g, () => getValue(supportSentences));
  sentence = sentence.replace(/{verb}/g, () => getValue(verbs));
  sentence = sentence.substr(0, 280);

  client.tweet(sentence);
};

module.exports = { generateTweet };
