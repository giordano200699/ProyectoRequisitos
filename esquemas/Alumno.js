const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Alumno = sequelize.define('alumno', {
  idAlumno: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  nombres: Sequelize.STRING,
  apellidos: Sequelize.STRING,
  correo: Sequelize.STRING
});



module.exports = Alumno;