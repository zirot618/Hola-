from rest_framework.routers import DefaultRouter
from tiendaZapatos.api.views import TiendaApiSet

router_tienda = DefaultRouter()
router_tienda.register(prefix='tiendaZapatos', basename= 'tiendaZapatos', viewset= TiendaApiSet)