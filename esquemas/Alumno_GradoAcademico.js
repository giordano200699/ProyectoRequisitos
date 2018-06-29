const Sequelize = require('sequelize');
const sequelize = require('../database/db');


var Alumno_GradoAcademico = sequelize.define('alumno_gradoAcademico', {
    idAlumno_GradoAcademico: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
});



//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//Alumno_GradoAcademico.sync();

module.exports = Alumno_GradoAcademico;