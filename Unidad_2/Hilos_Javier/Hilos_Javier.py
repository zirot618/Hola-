from Hilos import  Hilo
import datetime 
import logging 
import time

class main ():
        def main ():
            logging.basicConfig(level=logging.DEBUG)
            inicio=datetime.datetime.now()
            miHilo= Hilo("hilo",2,"")
            miHilo.start()


            while True:
                var="a"
                var=input ("||Ingrese|| \n  ")
                time.sleep(2)
                miHilo.setVar(var)
                if var=="bay":
                     break
            
            final=datetime.datetime.now()
            print("\nTiempo total= {}".format (final.second - inicio.second)+"  Segundos")

        main()
    
    

    