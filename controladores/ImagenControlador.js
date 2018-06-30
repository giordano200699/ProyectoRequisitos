const im = require('../modelos/ImagenModelo');

var multer = require('multer');
var upload = multer({dest: './uploads/'});
var fs = require('fs');


exports.subirImagen = (req, res) => {
	var direccion;
	var hoy = new Date();
	hoy = hoy.getSeconds()+"_"+hoy.getMinutes()+"_"+hoy.getHours()+"_"+hoy.getDate()+"_"+(hoy.getMonth()+1)+"_"+hoy.getFullYear();
    for(var x=0;x<req.files.length;x++) {
        //copiamos el archivo a la carpeta definitiva de fotos
       fs.createReadStream('./uploads/'+req.files[x].filename).pipe(fs.createWriteStream('./public/imagenes/'+hoy+'_'+req.files[x].originalname)); 
       //borramos el archivo temporal creado
       direccion=''+hoy+'_'+req.files[x].originalname;
       fs.unlink('./uploads/'+req.files[x].filename); 
    }  
    const imagen = {
    	url: 'public/imagenes/'+direccion,
        orden: req.body.orden,
        esSuelto: true,
        descripcion: req.body.descripcion,
        idAlumno: req.body.idAlumno
  	};
     console.log("LA IMAGEN ES ",imagen);
  	im.crearImagen(imagen);

    res.redirect('/admin/alumnos')
}