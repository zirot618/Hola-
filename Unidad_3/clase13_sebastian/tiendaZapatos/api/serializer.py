from rest_framework.serializers import ModelSerializer
from tiendaZapatos.models import Zapatos


class TiendaSerializer(ModelSerializer):
    
    class Meta:
        model = Zapatos
        fields = ['marcaZ', 'modeloZ', 'coloZ', 'tallaZ']#nuevo