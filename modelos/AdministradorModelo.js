const Administrador=require('../esquemas/Administrador');

exports.iniciarSesion = (data)=>{
    Administrador.findAll({
        where:{
            correo:data.correo,
            password:data.password
        }
    }).then(objeto=>{
        if(objeto!=null){
            return objeto;
        }else{
            console.log('No se encontro en la base de datos');
            return null;
        }
    })
}

