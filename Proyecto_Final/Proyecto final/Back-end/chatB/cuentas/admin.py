from django.contrib import admin
from cuentas.models import Usuario

@admin.register(Usuario)
class registroCuentasAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'apellido', 'usuario', 'contraseña']
