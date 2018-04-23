const person = require('../service/person');
const config = require('../../config/env');


async function getAll(req, res) {
    return await person.getAll().catch(err => {      
         res.status(err.statusCode || 500).send(err)
    }).then(q => {
        return res.status(200).send(q);
     })

}
async function get(req, res) {
    return await person.get(req.params.cpf).catch(err => {      
         res.status(err.statusCode || 500).send(err)
    }).then(q => {
        return res.status(200).send(q);
     })

}

async function post(req, res) {
    return await person.post(req.body.person).catch(err => {      
         res.status(err.statusCode || 500).send(err)
    }).then(q => {
        return res.status(200).send("Ok");
     })

}

async function put(req, res) {
    return await person.put(req.body.person).catch(err => {      
         res.status(err.statusCode || 500).send(err)
    }).then(q => {
        return res.status(200).send("Ok");
     })

}


async function del(req, res) {
    return await person.del(req.body.codPessoa).catch(err => {      
         res.status(err.statusCode || 500).send(err)
    }).then(q => {
        return res.status(200).send("Ok");
     })

}

module.exports = { getAll, get, post, put, del };