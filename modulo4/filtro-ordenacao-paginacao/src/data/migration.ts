import connection from './connection';
import users from './user.json';

const printError = (error: any) => {console.log(error.sqlMessage || error.Message)}

const createTables = () => connection
   .raw(`
   
      CREATE TABLE IF NOT EXISTS aula_users (
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        );
    `)

    .then(() => {console.log('Tabelas criadas')})
    .catch(printError)

    const insertUsers = () => connection('aula_users')
    .insert(users)
    .then(() => {console.log('Usuarios criados')})
    .catch(printError)

    const closeConnection = () => {connection.destroy()}

    createTables()

    .then(insertUsers)
    .finally(closeConnection)