from django.db import models

class usuarios(models.Model):
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    dni = models.PositiveIntegerField()
    edad = models.PositiveIntegerField()
    email = models.EmailField()
    contraseña = models.CharField(max_length=10)

