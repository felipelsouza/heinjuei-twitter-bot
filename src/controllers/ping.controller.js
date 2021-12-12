var http = require('http');

const ping = async () => {
  const options = {
    host: 'heinjuei-bot.herokuapp.com',
    path: '/',
  };

  http.get(options);
};

module.exports = { ping };
