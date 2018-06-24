const um = require('../modelos/AlumnoModelo');

exports.crearAlumno = (req, res) => {
	um.crearAlumno(req.body.nombres,req.body.apellidos,req.body.correo);
	res.redirect('/admin/alumnos')
}