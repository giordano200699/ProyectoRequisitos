const Sequelize = require('sequelize');
const sequelize = require('../database/db');



const Imagen = sequelize.define('imagen', {
  idImagen: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  url: { type: Sequelize.STRING, allowNull: false },
  orden: { type: Sequelize.INTEGER, allowNull: false },
  esSuelto: { type: Sequelize.BOOLEAN, allowNull: false },
  descripcion: { type: Sequelize.STRING, allowNull: true },
  idCarpeta:{ type: Sequelize.INTEGER }
});




//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//Imagen.sync();

module.exports = Imagen;