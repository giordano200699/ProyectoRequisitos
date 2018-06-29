const Sequelize = require('sequelize');
const sequelize = require('../database/db');


const Imagen = sequelize.define('imagen', {
  idImagen: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  url: { type: Sequelize.STRING, allowNull: false },
  descripcion: { type: Sequelize.STRING, allowNull: true },
  codigo: { type: Sequelize.STRING, allowNull: true }
});



//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//Imagen.sync();

module.exports = Imagen;