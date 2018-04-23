const user = require('../repository/login');

async function get(username, userpassword) {
    var usr = await user.get(username, userpassword);

    if (!usr)
        return {
            statusCode: 401,
            msg: 'Usuario ou senha incorretos'
        }
        
    return usr;
}

module.exports = { get };