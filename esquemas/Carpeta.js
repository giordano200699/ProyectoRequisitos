const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Imagen = require('./Imagen');

const Carpeta = sequelize.define('carpeta', {
  idCarpeta: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  tipo: { type: Sequelize.STRING, allowNull: false },
  codigo: { type: Sequelize.STRING, allowNull: true },
  descripcion: { type: Sequelize.STRING, allowNull: true }
});

//Alumno.hasMany(Carpeta);
//Alumno.Carpeta = Carpeta.belongsTo(Alumno, { foreignKey: 'idAlumno' });
Carpeta.Imagen=Carpeta.hasMany(Imagen, { foreignKey: 'idCarpeta',as: 'imagenes' });
Carpeta.Carpeta=Carpeta.hasMany(Carpeta, { foreignKey: 'idCarpetaPadre',as: 'carpetasHijas' });



//Descomentar esto para crear la tabla y usar npm start
//Al crear la tabla comentar esto y reiniciar el servidor
//Carpeta.sync();

module.exports = Carpeta;