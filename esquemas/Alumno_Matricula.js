const Sequelize = require('sequelize');
const sequelize = require('../database/db');


var Alumno_Matricula = sequelize.define('alumno_matricula', {
    idAlumno_Matricula: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    orden: { type: Sequelize.INTEGER, allowNull: false },
    fecha: { type: Sequelize.DATE, allowNull: false }
});



//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//Alumno_GradoAcademico.sync();

module.exports = Alumno_Matricula;