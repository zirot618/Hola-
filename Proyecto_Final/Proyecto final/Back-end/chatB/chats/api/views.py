from rest_framework.viewsets import ModelViewSet
from chats.api.serializer import ChatsSerializer
from chats.models import Mensaje

class ChatsApiSet(ModelViewSet):
    serializer_class = ChatsSerializer
    queryset = Mensaje.objects.all()