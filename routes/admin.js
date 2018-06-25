var express = require('express');
const ac = require('../controladores/AlumnoControlador');
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

router.post('/alumnos/editar', ac.editarAlumno);

router.post('/alumnos/actualizar', ac.actualizarAlumno);

router.post('/alumnos/eliminar', ac.eliminarAlumno);

module.exports = router;
