const am = require('../modelos/AlumnoModelo');

exports.crearAlumno = (req, res) => {
	const alumno = {
    	nombres: req.body.nombres,
    	apellidos: req.body.apellidos,
    	correo: req.body.correo,
    	codigoPregrado: req.body.codigoPregrado
  	};
	am.crearAlumno(alumno);
	res.redirect('/admin/alumnos')
}

exports.mostrarAlumnos = (req, res) => {
	am.obtenerTodos((err,alumnos)=>{
      if(err) return console.log(err);
      res.render('vistaAlumno/mostrarAlumnos',{alumnos : alumnos});
    });
}

exports.editarAlumno = (req, res) => {
	am.obtener(req.body.idAlumno,(err, alumno)=>{
    if(err) return console.log(err);
    res.render('vistaAlumno/editarAlumno',{alumno : alumno});
  });
}

exports.actualizarAlumno = (req, res) => {
	const alumno = {
		idAlumno: req.body.idAlumno,
    	nombres: req.body.nombres,
    	apellidos: req.body.apellidos,
    	correo: req.body.correo,
    	codigoPregrado: req.body.codigoPregrado,
    	codigoBachiller: req.body.codigoBachiller,
    	codigoTitulo: req.body.codigoTitulo
  	};
	am.actualizar(alumno,(err)=>{
    if(err) return console.log(err);
    res.redirect('/admin/alumnos/mostrar');
  });
}

exports.eliminarAlumno = (req, res) => {
	am.eliminar(req.body.idAlumno,(err)=>{
    if(err) return console.log(err);
    res.redirect('/admin/alumnos/mostrar');
  });
}