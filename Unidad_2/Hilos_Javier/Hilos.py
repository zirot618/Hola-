import threading 
import time
import logging 

logging.basicConfig(level=logging.DEBUG)

class Hilo (threading.Thread):
    
    def __init__(self, nombreHilo,tiempo,var):
        threading.Thread.__init__(self, name=nombreHilo, target=Hilo.run)
        self.nombreHilo = nombreHilo
        self.tiempo= tiempo
        self.var=var

    def setTiempo (self,tiempo):
        self.tiempo = tiempo

    def setVar(self,var):
        self.var=var
                
    def run(self):
        
        self.Generar()
         

    def Generar(self):
       
        guardar=""
        
        while  True:
            
            if self.var == guardar:
                guardar = self.var
                pass
            else:
                guardar = self.var
                with open("AdiosMUNDO", "a") as f:
                    
                    f.write(guardar + "\n")
                logging.debug("Guardado {}".format(guardar))


    
                
                    


