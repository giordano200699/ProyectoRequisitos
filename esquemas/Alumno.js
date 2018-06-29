const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Imagen = require('./Imagen');
const Alumno_gradoAcademico = require('./Alumno_GradoAcademico');
const Alumno_matricula = require('./Alumno_Matricula');

const GradoAcademico = require('./GradoAcademico');
//const Matricula = require('./Matricula');
const TipoDocumento = require('./TipoDocumento');

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

Alumno.obtenerAlumno_matriculas=Alumno.hasMany(Alumno_matricula, { foreignKey: 'idAlumno' ,as: 'alumno_matriculas'});

//Descomentar para crear la tabla Alumno
//Alumno.sync();

//Descomentar para crear la tabla imagen
//Imagen.sync();

//Descomentar para crear la tabla Alumno_gradoAcademico
//Alumno_gradoAcademico.sync();

//Descomentar para crear la tabla Alumno_Matricula
//Alumno_matricula.sync();

module.exports = Alumno;