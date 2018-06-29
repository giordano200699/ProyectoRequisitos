const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Imagen = require('./Imagen');

var GradoAcademico = sequelize.define('gradoAcademico', {
  idGradoAcademico: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  nombre: { type: Sequelize.STRING, allowNull: false }
});

GradoAcademico.obtenerImagenes=GradoAcademico.hasMany(Imagen, { foreignKey: 'idGradoAcademico' ,as: 'imagenes'});


//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//GradoAcademico.sync();

module.exports = GradoAcademico;