const express = require('express');
const person = require('../controller/person');

const router = express.Router();


router.route('/').get(person.getAll);

router.route('/:cpf').get(person.get);

router.route('/').post(person.post);

router.route('/').put(person.put);

router.route('/').delete(person.del);

module.exports  = router;