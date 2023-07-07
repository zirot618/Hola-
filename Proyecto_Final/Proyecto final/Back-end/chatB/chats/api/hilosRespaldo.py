

import threading

def guardarRespaldoMensajes(mensajes):
    with open("respaldoMensajes.txt", "a") as archivo:
        for mensaje in mensajes:
            linea = f"Remitente: {mensaje.remitente}, Destinatario: {mensaje.destinatario}, Contenido: {mensaje.contenido}\n"
            archivo.write(linea)

