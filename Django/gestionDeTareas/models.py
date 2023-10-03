from django.db import models

class Tareas(models.Model):
    titulo = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    realizada = models.BooleanField(default=False)
   
