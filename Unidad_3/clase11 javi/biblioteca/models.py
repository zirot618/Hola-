from django.db import models

class Biblioteca(models.Model):
    titulo = models.CharField(max_length=255)
    resumen = models.TextField()
