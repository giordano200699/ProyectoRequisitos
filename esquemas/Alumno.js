const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Alumno = sequelize.define('alumno', {
  idAlumno: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  nombres: Sequelize.STRING,
  apellidos: Sequelize.STRING,
  correo: { type: Sequelize.STRING, allowNull: true },
  codigoPregrado: Sequelize.STRING,
  codigoBachiller: { type: Sequelize.STRING, allowNull: true },
  codigoTitulo: { type: Sequelize.STRING, allowNull: true }
});

//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//Alumno.sync();

module.exports = Alumno;