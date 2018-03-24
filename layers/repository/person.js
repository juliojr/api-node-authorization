const config = require('../../config/env/development');
const person = require("../Model/Person");
let obj = config.dataConfig.MYSQL;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(obj.database, obj.user, obj.password, {
    host: obj.host,
    port: obj.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: 'path/to/database.sqlite'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

async function getAll() {
    return await person.person(sequelize, Sequelize).findAll();
      
}

async function get(cpfCnpj) {
    return await person.person(sequelize, Sequelize).findOne({
        where: {
            CPF_CNPJ: cpfCnpj
        }
    });
}

async function post(p) {
    await person.person(sequelize, Sequelize).create(p);

}

async function put(p) {
    await person.person(sequelize, Sequelize).update(p, {where: {COD_PESSOA : p.COD_PESSOA}});

}

async function del(codPessoa) {
    await person.person(sequelize, Sequelize).destroy({where: {COD_PESSOA : codPessoa}});

}

module.exports = { get, getAll, post, put, del };