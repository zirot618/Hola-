from rest_framework.serializers import ModelSerializer
from concesionario.models import Motos


class MotosSerializer(ModelSerializer):
    
    class Meta:
        model = Motos
        fields = ['marca', 'color', 'cilindraje']