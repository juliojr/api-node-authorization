module.exports =  {
    env: 'development',
    nomeApi: 'login',
    urlApi: 'http://localhost',
    portApi: 4569,
    tokenPrivateKey: new Buffer("hjsfjh9jkrhnhnhjnhçnejkançvd", "utf-8"),    
    dataConfig: {
        MYSQL: {
            database: 'dbteste',
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root'
        }
    }
  };