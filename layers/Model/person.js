module.exports = {
    person: function person(queryInterface, Sequelize) {
        return queryInterface.define('tb_pessoas', {
            COD_PESSOA: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true

            },
            NOME_RAZAO: {
                type: Sequelize.STRING
            },
            FANTASIA_APELIDO: {
                type: Sequelize.STRING
            },
            CPF_CNPJ: {
                type: Sequelize.STRING
            },
            RG_IE: {
                type: Sequelize.STRING
            },
            EMAIL: {
                type: Sequelize.STRING
            },
            OBS: {
                type: Sequelize.STRING
            }
        },
            {
                timestamps: false
            }) 
    }
}