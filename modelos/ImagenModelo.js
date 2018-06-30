const Imagen = require('../esquemas/Imagen');


exports.crearImagen = (data) => {
	Imagen.create({
    url: data.url,
    orden: data.orden,
    esSuelto: data.esSuelto,
    descripcion: data.descripcion,
    idAlumno: data.idAlumno
  });
}