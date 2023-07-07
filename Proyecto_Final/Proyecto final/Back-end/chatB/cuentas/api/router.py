from rest_framework.routers import DefaultRouter
from cuentas.api.views import CuentaApiSet

router_cuenta = DefaultRouter()
router_cuenta.register(prefix= 'cuentas', basename= 'cuentas', viewset= CuentaApiSet)