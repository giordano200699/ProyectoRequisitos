const Alumno = require('../esquemas/Alumno');

exports.crearAlumno = (nombres, apellidos, correo) => {
	Alumno.create({
    nombres: nombres,
    apellidos: apellidos,
    correo: correo
  });
	console.log("Se creo un alumno");
};
