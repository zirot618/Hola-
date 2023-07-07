from rest_framework.viewsets import ModelViewSet  
from tiendaZapatos.api.serializer import TiendaSerializer
from tiendaZapatos.models import Zapatos

class TiendaApiSet(ModelViewSet):
    serializer_class = TiendaSerializer
    def get_queryset(self): #nuevo
        queryset = Zapatos.objects.all()
        marcaZ = self.request.query_params.get('marcaZ')
        tallaZ = self.request.query_params.get('tallaZ')
        if marcaZ is not None:
            queryset= queryset.filter(marcaZ = marcaZ)
        elif tallaZ is not None:
            queryset = queryset.filter(tallaZ = tallaZ)
        return queryset