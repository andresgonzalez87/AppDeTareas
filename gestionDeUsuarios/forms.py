from django import forms

class FormularioUsuarios(forms.Form):
    nombre = forms.CharField()
    apellido = forms.CharField()
    dni = forms.IntegerField()
    edad = forms.IntegerField()
    email = forms.EmailField()
    contraseña = forms.CharField(widget=forms.PasswordInput())
