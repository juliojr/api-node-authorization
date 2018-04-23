const Authorization = require("../authorization/authorization")
const config = require('../config/env');

async function verificar(req, res, next) {

    if (typeof req.headers['token'] === 'undefined')
        return await res.status(401).send('Token não informado');

    await Authorization.tokenDecrypt(req.headers['token'], config.tokenPrivateKey).then(q => {
        next();
    }).catch(err => {
        return res.status(err.statusCode || 401).send('Token Inválido');
    });
};

module.exports = { verificar };