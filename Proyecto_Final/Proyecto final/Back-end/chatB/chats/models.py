from django.db import models

# Create your models here.
class Mensaje(models.Model):
    remitente = models.CharField(max_length=100)
    destinatario = models.CharField(max_length=100)
    contenido = models.TextField()
    fechaEnvio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.contenido
