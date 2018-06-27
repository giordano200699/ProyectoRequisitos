const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Administrador = sequelize.define('administrador', {
  idAdministrador: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  nombres: Sequelize.STRING,
  apellidos: Sequelize.STRING,
  correo: { type: Sequelize.STRING, allowNull: true },
  password: Sequelize.STRING
});

//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
Alumno.sync();

module.exports = Administrador;