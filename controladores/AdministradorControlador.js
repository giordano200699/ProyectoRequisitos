const modeloAdministrador=require('../modelos/AdministradorModelo');

exports.iniciandoSesion = (req,res)=>{
    modeloAdministrador.iniciarSesion(req,res);
    
}