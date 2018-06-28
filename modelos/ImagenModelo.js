const Imagen = require('../esquemas/Imagen');
const Carpeta = require('../esquemas/Carpeta');


exports.crearImagen = (data) => {
	Imagen.create({
    url: data.url,
    orden: data.orden,
    esSuelto: data.esSuelto,
    descripcion: data.descripcion,
    idCarpeta: data.idCarpeta
  });
}