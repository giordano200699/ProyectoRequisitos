const Administrador=require('../esquemas/Administrador');

exports.iniciarSesion = (req,res)=>{

    Administrador.findAll({
        where:{
            correo:req.query.nombreCuenta,
            password:req.query.contrasenia
        }
    }).then(objeto=>{
        if(objeto.length!=0){
            console.log('Inicio cesion correctamente...');
            res.redirect('/admin');
        }else{
            console.log('No se pude acceder...');
            //res.render('datosLoginInvalidos');
            res.render('index');
        }
    })
}