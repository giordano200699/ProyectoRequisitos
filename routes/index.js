var AdminController = require('../controladores/AdministradorControlador');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/validacion', function(req, res, next) {
  AdminController.iniciandoSesion(req,res);
});

module.exports = router;
