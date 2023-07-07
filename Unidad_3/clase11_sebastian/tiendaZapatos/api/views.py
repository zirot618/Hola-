from rest_framework.viewsets import ModelViewSet  
from tiendaZapatos.api.serializer import TiendaSerializer
from tiendaZapatos.models import Zapatos

class TiendaApiSet(ModelViewSet):
    serializer_class = TiendaSerializer
    queryset = Zapatos.objects.all()