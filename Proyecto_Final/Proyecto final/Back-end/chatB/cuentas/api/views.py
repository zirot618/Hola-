from rest_framework.viewsets import ModelViewSet
from cuentas.api.serializer import CuentaSerializer
from cuentas.models import Usuario

class CuentaApiSet(ModelViewSet):
    serializer_class = CuentaSerializer
    queryset = Usuario.objects.all()