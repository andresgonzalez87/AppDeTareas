from django import forms

class FormularioUsuarios(forms.Form):
    email = forms.EmailField()
    contraseña = forms.CharField(widget=forms.PasswordInput())