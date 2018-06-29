const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Imagen = require('./Imagen');
const Alumno_gradoAcademico = require('./Alumno_GradoAcademico');

var Alumno = sequelize.define('alumno', {
  idAlumno: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  nombres: Sequelize.STRING,
  apellidos: Sequelize.STRING,
  correo: { type: Sequelize.STRING, allowNull: true },
  codigoPregrado: Sequelize.STRING,
  codigoBachiller: { type: Sequelize.STRING, allowNull: true },
  codigoTitulo: { type: Sequelize.STRING, allowNull: true }
});

Alumno.obtenerImagenes=Alumno.hasMany(Imagen, { foreignKey: 'idAlumno' ,as: 'imagenes'});

Alumno.obtenerAlumno_gradoAcademicos=Alumno.hasMany(Alumno_gradoAcademico, { foreignKey: 'idAlumno' ,as: 'alumno_gradoAcademicos'});


//Descomentar para crear la tabla Alumno
//Alumno.sync();

//Descomentar para crear la tabla imagen
//Imagen.sync();
module.exports = Alumno;