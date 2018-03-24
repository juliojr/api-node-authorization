const app = require('./config/express');
const config = require('./config/env');

app.listen(config.portApi, () => {
    console.log(`API Server started and listening on port ${config.portApi} (${config.env})`);
  });
  
  module.exports =  app;