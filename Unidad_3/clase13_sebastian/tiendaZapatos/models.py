from django.db import models

class Zapatos(models.Model):
    marcaZ = models.CharField(max_length=255)
    modeloZ = models.CharField(max_length=255)
    coloZ = models.CharField(max_length=255)
    tallaZ = models.CharField(max_length=255, default='')#nuevo

