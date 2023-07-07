import axios from "axios";

const baseurl = "http://localhost:8000/api2/";

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method : metodo,
        url: baseurl + url,
        data: informacion
    }
}


export const crearConfiguracionSinInfo = (metodo, url) => {//nuevo
    return {
        method : metodo,
        url: baseurl + url,
    }
}
export const guardarZapato = async (informacion) => {
    try {
        const configuracion = crearConfiguracion("post" , "tiendaZapatos/", informacion)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 201){
            console.log(respuesta)
        }
        return respuesta.status;
    } catch(error) {
        console.log(error)
    }
}

export const traerZapatos = async () => { //nuevo
    try {
        const configuracion = crearConfiguracion("get" , "tiendaZapatos/")
        const respuesta =await axios(configuracion)
        if(respuesta.status === 200){
            console.log(respuesta.data)
            
        }
        return respuesta.data;
    } catch(error) {
        console.log(error)
    }
}

export const traerMarcaZ = async (marcaZ) => {//nuevo
    try {
        const configuracion = crearConfiguracion("get" , "tiendaZapatos/?marcaZ="+marcaZ)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 200){
            console.log(respuesta.data)
            
        }
        return respuesta.data;
    } catch(error) {
        console.log(error)
    }
}

export const traerTallaZ = async (tallaZ) => {//nuevo
    try {
        const configuracion = crearConfiguracion("get" , "tiendaZapatos/?tallaZ="+tallaZ)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 200){
            console.log(respuesta.data)
            
        }
        return respuesta.data;
    } catch(error) {
        console.log(error)
    }
}