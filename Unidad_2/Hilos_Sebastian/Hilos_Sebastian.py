import datetime
import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG)


class Comparador(threading.Thread):
    def __init__(self, nombreHilo, tiempo):
        threading.Thread.__init__(self, name=nombreHilo, target=Comparador.run)
        self.nombreHilo = nombreHilo
        self.tiempo = tiempo
        
    def setTime(self, tiempo):
        self.tiempo = tiempo
            
    def run(self):
        start= datetime.datetime.now()
        i = False
        entradaT = ""
        entradaA = ""
        while i != True:
            time.sleep(2)
            entradaT = input("Ingrese una variable de texto: ")
            if entradaT == entradaA:
                logging.debug("\033[1;31m"+"Las entradas de texto son las mismas"+"\033[0;m")
            else:
                entradaA = entradaT
                with open("entradaTexto.txt", "a") as f:
                    f.write(entradaA + "\n")
                logging.debug("\033[1;37m"+"Se guardó la variable " + entradaA+'\033[0;m')
                if entradaA =="close":
                    print("\033[1;32m"+"El programa finalizo correctamente :)"+'\033[0;m')
                    end = datetime.datetime.now()
                    cronometro =  (end.second - start.second)   
                    print("\033[1;32m"+"El programa tardo:  {}".format(cronometro)+ " segundos "+'\033[0;m')
                    break
                
                    
nombreHilo = "hiloEntradatexto"
ejecutarH = Comparador(nombreHilo, 2)
ejecutarH.start()

                    
                
                
            