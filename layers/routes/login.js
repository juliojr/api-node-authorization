const express = require('express');
const login = require('../controller/login');

const router = express.Router();

router.route('/')
  .post(login.post);

module.exports  = router;