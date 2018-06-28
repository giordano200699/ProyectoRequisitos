var express = require('express');
const ac = require('../controladores/AlumnoControlador');
const ic = require('../controladores/ImagenControlador');


var multer = require('multer');
var upload = multer({dest: './uploads/'});
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('vistaAlumno/alumnos');
});
router.get('/alumnos', function(req, res, next) {
   res.render('vistaAlumno/crearAlumno');
});
router.post('/alumnos/creando', ac.crearAlumno);

router.get('/alumnos/mostrar',ac.mostrarAlumnos);

router.post('/alumnos/visualizar', ac.visualizarAlumno);

router.post('/alumnos/editar', ac.editarAlumno);

router.post('/alumnos/actualizar', ac.actualizarAlumno);

router.post('/alumnos/eliminar', ac.eliminarAlumno);

router.post('/subirFoto',upload.array('foto', 2), ic.subirImagen);

router.get('/alumnos/visualizarAlumno',ac.visualizarAlumno);

module.exports = router;
