const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Imagen = require('./Imagen');

var TipoDocumento = sequelize.define('tipoDocumento', {
  idTipoDocumento: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  nombre: { type: Sequelize.STRING, allowNull: false }
});

TipoDocumento.obtenerImagenes=TipoDocumento.hasMany(Imagen, { foreignKey: 'idTipoDocumento' ,as: 'imagenes'});


//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//TipoDocumento.sync();

module.exports = TipoDocumento;