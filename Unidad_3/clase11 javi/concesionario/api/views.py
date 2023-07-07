from rest_framework.viewsets import ModelViewSet  
from concesionario.api.serializer import MotosSerializer
from concesionario.models import Motos

class MotosApiSet(ModelViewSet):
    serializer_class = MotosSerializer
    def get_queryset(self):
        queryset = Motos.objects.all()
        marca = self.request.query_params.get('marca')
        color = self.request.query_params.get('color')
        if marca is not None:
            queryset =queryset.filter(marca=marca)
        if color is not None:
            queryset =queryset.filter(color=color)
        return queryset