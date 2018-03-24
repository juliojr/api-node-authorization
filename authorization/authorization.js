const crypto = require('crypto');
const algorithm = 'aes-256-ctr'

async function tokenEncrypt(obj, tokenPrivateKey) {

    let cipher = crypto.createCipher(algorithm, tokenPrivateKey);
    let crypted = cipher.update(JSON.stringify(obj), 'utf8', 'hex')
    crypted += cipher.final('hex');
    return await crypted;
}

async function tokenDecrypt(token, tokenPrivateKey) {

    let decipher = crypto.createDecipher(algorithm, tokenPrivateKey);
    let dec = decipher.update(token, 'hex', 'utf8')
    dec += decipher.final('utf8')

    return await JSON.parse(dec);
}

module.exports = {
    tokenEncrypt,
    tokenDecrypt
}