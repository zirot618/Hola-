from rest_framework.serializers import ModelSerializer
from chats.models import Mensaje
import threading
from .hilosRespaldo import guardarRespaldoMensajes

class ChatsSerializer(ModelSerializer):
    class Meta:
        model = Mensaje
        fields = '__all__'

    def create(self, validarData):
        # Guardar el mensaje utilizando el método create del serializador
        mensaje = super().create(validarData)

        # Obtener los mensajes y llamar a la función de respaldo en un hilo separado
        mensajes = Mensaje.objects.all()
        hiloGuardarMensaje = threading.Thread(target=guardarRespaldoMensajes, args=(mensajes,))
        hiloGuardarMensaje.start()
        hiloGuardarMensaje.join()
        return mensaje
