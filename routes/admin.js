var express = require('express');
const uc = require('../controladores/AlumnoControlador');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('vistaAlumno/alumnos');
});
router.get('/alumnos', function(req, res, next) {
   res.render('vistaAlumno/crearAlumno');
});
router.post('/alumnos/creando', uc.crearAlumno);

module.exports = router;
