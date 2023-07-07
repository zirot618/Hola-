from rest_framework.routers import DefaultRouter
from concesionario.api.views import MotosApiSet

router_motos = DefaultRouter()
router_motos.register(prefix='concesionario', basename= 'concesionario', viewset= MotosApiSet)