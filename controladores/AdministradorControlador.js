const modeloAdministrador=require('../modelos/AdministradorModelo');

exports.iniciandoSesion = ()=>{
    const data={
        correo:'giordano',
        password:'contra'
    }
    let resp=modeloAdministrador.iniciarSesion(data);
    
    if(resp!=null){
        console.log('Inicio cesion correctamente...');
    }
}