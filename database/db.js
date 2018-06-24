const Sequelize = require('sequelize');
const configuracion = require('../configuracion/db');

const sequelize = new Sequelize(configuracion.database, configuracion.username, configuracion.password, {
  host: configuracion.host,
  dialect: configuracion.dialect
});

sequelize
  .authenticate()
  .then(() => {
    console.log('La conexión ha sido establecida exitosamente.');
  })
  .catch(err => {
    console.error('Es inválido la conexión a la Base de datos', err);
  });

module.exports = sequelize;