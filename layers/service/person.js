const person = require('../repository/person');

async function getAll() {
    var  persons = await person.getAll();

    if (!persons)
        return {
            statusCode: 400,
            msg: 'Persons error'
        }
        
    return persons;
}

async function get(cpfCnpj) {
    var prn = await person.get(cpfCnpj);

    if (!prn)
        return {
            statusCode: 400,
            msg: 'Error: Person not found'
        }
        
    return prn;
}


async function post(p) {
    var prn = await person.post(p);

    if (!prn)
        return {
            statusCode: 400,
            msg: 'Error: not inserted'
        }
        
    return prn;
}

async function put(p) {
    var prn = await person.put(p);

    if (!prn)
        return {
            statusCode: 400,
            msg: 'Error: Person not found'
        }
        
    return prn;
}

async function del(codPessoa) {
    var prn = await person.del(codPessoa);

    if (!prn)
        return {
            statusCode: 400,
            msg: 'Error: Person not found'
        }
        
    return prn;
}
module.exports = { getAll , get, post, put, del };