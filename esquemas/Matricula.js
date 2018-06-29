const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Alumno_matricula = require('./Alumno_Matricula');

const Matricula = sequelize.define('matricula', {
  idMatricula: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  orden: { type: Sequelize.INTEGER, allowNull: false },
  fechaInicial: { type: Sequelize.DATE, allowNull: false },
  fechaFin: { type: Sequelize.DATE, allowNull: false }
});


Matricula.obtenerAlumno_matriculas=Matricula.hasMany(Alumno_matricula, { foreignKey: 'idMatricula' ,as: 'alumno_matriculas'});

//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//Matricula.sync();

module.exports = Matricula;