from django.contrib import admin
from concesionario.models import Motos

@admin.register(Motos)
class concesionarioAdmin(admin.ModelAdmin):
    list_display = ['marca', 'color', 'cilindraje']