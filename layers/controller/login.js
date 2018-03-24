const Authorization = require('../../Authorization/Authorization');
const user = require('../service/login');
const config = require('../../config/env');

async function post(req, res) {
    var cliente = await user.get(req.body.username, req.body.password).catch(err => {      
        return res.status(err.statusCode || 500).send(err);
    });

    if ((cliente.statusCode || 200) != 200)
        return res.status(cliente.statusCode).send(cliente.msg);

    await Authorization.tokenEncrypt(cliente, config.tokenPrivateKey).then(q => {
        return res.status(200).send(q);
    });
}

module.exports = { post };