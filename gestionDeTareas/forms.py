from django import forms

class FormularioTareas(forms.Form):
    titulo = forms.CharField()
    descripcion = forms.CharField()
    