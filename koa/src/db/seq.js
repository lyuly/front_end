const { Sequelize } = require('sequelize')

const { 
  MARIADB_HOST,
  MARIADB_PORT,
  MARIADB_USER,
  MARIADB_PWD,
  MARIADB_DB,
} = require('../config/config.default')

const seq = new Sequelize(MARIADB_DB, MARIADB_USER, MARIADB_PWD, {
  host: MARIADB_HOST,
  port: MARIADB_PORT,
  dialect: 'mariadb'
})

/* seq.authenticate()
.then(() => {
  console.log('OK')
})
.catch(err => {
  console.log('wrong');
})
 */
module.exports = seq