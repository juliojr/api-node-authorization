const  express = require('express');
const bodyParser = require('body-parser');
const routes = require('../layers/routes');
const consign = require('consign')
const validation = require("../middleware/validation")
const app = express();

consign()
.include('middleware')
.then('layers/controller')
.into(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validation.verificar);

app.use('/api', routes); 
module.exports =  app;