import axios from "axios";

const baseurl = "http://localhost:8000/api2/";

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method : metodo,
        url: baseurl + url,
        data: informacion
    }
}

export const crearConfiguracionSinInformacion = (method, url) => {
    return {
      method: method,
      url: baseurl + url,
      
    }
}

export const hacerPeticion = async (informacion) => {
    try {
        const configuracion = crearConfiguracion("post" , "concesionario/", informacion)
        const respuesta = await axios(configuracion)
        if(respuesta.status === 201){
            console.log(respuesta)
        }
        return respuesta.status;
    } catch(error) {
        console.log(error)
    }
};

export const traerTodo = async (informacion) => {
    try {
      const configuracion = crearConfiguracionSinInformacion("get", "concesionario/");
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
        console.log(respuesta.data);
      }
      return respuesta.data;
    } catch (error) {
      console.log(error);
    }
};

export const traerMarca = async (marca) => {
    try {
      const configuracion = crearConfiguracionSinInformacion("get", "concesionario/?marca="+marca);
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
        console.log(respuesta.data);
      }
      return respuesta.data;
    } catch (error) {
      console.log(error);
    }
};

export const traerColor = async (marca, color) => {
    try {
      const configuracion = crearConfiguracionSinInformacion("get", "concesionario/?marca="+marca+"&color="+color);
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
        console.log(respuesta.data);
      }
      return respuesta.data;
    } catch (error) {
      console.log(error);
    }
};