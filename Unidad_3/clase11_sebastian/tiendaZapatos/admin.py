from django.contrib import admin
from tiendaZapatos.models import Zapatos

@admin.register(Zapatos)
class tiendaZapatosAdmin(admin.ModelAdmin):
    list_display = ['marcaZ', 'modeloZ', 'coloZ']

