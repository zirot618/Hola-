import axios from "axios";

const baseurl = "http://localhost:8000/registro/";

export const crearConfiguracion =  (metodo , url, informacion) => {
    return {
        method: metodo,
        url: baseurl + url,
        data: informacion
    }
}


export const hacerPeticion = async(informacion)=> {
    try{
        const configuracion = crearConfiguracion("post", "cuentas/", informacion)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 201){
            console.log(respuesta)
        }
        return respuesta.status;
    } catch(error) {
        console.log(error)
    }
}

export const obtenerUsuarios = async () => {
    try {
        const configuracion = crearConfiguracion("get", "cuentas/");
        const respuesta = await axios(configuracion);
        if (respuesta.status === 200) {
            console.log(respuesta.data);
        }
        return respuesta.data;
    } catch (error) {
        console.log(error);
    }
  };
  