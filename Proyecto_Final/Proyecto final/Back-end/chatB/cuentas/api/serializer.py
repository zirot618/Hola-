from rest_framework.serializers import ModelSerializer
from cuentas.models import Usuario


class CuentaSerializer(ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombre', 'apellido', 'usuario', 'contraseña']