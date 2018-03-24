module.exports = {
    user: function user(queryInterface, Sequelize) {
        return queryInterface.define('tb_usuarios', {
            COD_USUARIO: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            USERNAME: {
                type: Sequelize.STRING
            },
            PASSWORD: {
                type: Sequelize.STRING
            }
        },
            {
                timestamps: false
            }) 
    }
}