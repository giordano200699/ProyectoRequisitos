const Alumno = require('../esquemas/Alumno');

exports.crearAlumno = (data) => {
	Alumno.create({
    nombres: data.nombres,
    apellidos: data.apellidos,
    correo: data.correo,
    codigoPregrado: data.codigoPregrado
  });
	console.log("Se creo un alumno");
};

exports.obtenerTodos = (funcion) => {
    let error;

    Alumno.findAll().then(objeto => {
      console.log("Se encontraron "+objeto.length+" alumnos.");
      funcion(error, objeto);
    })
}

exports.obtener = (data,funcion) => {
    let error;

    //Consistencia
    Alumno.findById(data).then(objeto => {
      if(objeto!=null){
        console.log("Se ha encontrado el Alumno " + objeto.nombre_perfil);
      }else{
        error = "ERROR : El alumno buscado no existe.";
      }
      funcion(error, objeto);
    });
}

exports.actualizar = (data, funcion) => {
    let error;
    console.log("los nombres bota : ",data)
    //Consistencia
    if(data.nombres==null || data.nombres.length==0 ){
      error = "ERROR : Los nombres del alumno no deben estar vacío.";
      funcion(error, data);
    }else if(data.idAlumno==null || data.idAlumno.length==0){
      error = "ERROR : El id del alumno no debe estar vacío.";
      funcion(error, data);
    }else if(data.apellidos==null || data.apellidos.length==0){
      error = "ERROR : Los apellidos del alumno no deben estar vacío.";
      funcion(error, data);
    }else if(data.codigoPregrado==null || data.codigoPregrado.length==0){
      error = "ERROR : El codigo de Pregrado del alumno no debe estar vacío.";
      funcion(error, data);
    }else{
      Alumno.findById(data.idAlumno).then(objeto => {
        if(objeto!=null){
          objeto.update({
            nombres: data.nombres,
            apellidos: data.apellidos,
            correo: data.correo,
            codigoPregrado: data.codigoPregrado,
            codigoBachiller: data.codigoBachiller,
            codigoTitulo: data.codigoTitulo
          }).then(objeto=>{
          	funcion(error, data);
          });
          console.log("Se ha editado el alumno de id = " + data.idAlumno);
        }else{
          error = "ERROR : El alumno a editar no existe.";
          funcion(error, data);
        }
        
      });    
    }
}

exports.eliminar = (data, funcion) => {
    let error;

    //Consistencia
    Alumno.findById(data).then(objeto => {
      if(objeto!=null){
        objeto.destroy().then(objeto=>{
            funcion(error, objeto);
          });
        console.log("El alumno con id = " + data + " ha sido eliminado.")
      }else{
        error = "ERROR : El alumno a eliminar no existe.";
        funcion(error, objeto);
      }
    });
}