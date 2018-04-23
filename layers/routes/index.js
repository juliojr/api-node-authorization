const express = require('express');
const login = require('./login');
const person = require('./person');
const router = express.Router();

/** GET /api-status - Check service status **/
router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);
router.use('/login', login);
router.use('/person',person);

module.exports = router;