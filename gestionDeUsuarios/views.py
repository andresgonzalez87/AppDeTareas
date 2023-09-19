from django.shortcuts import render
from django.shortcuts import render, redirect
from gestionDeUsuarios.forms import FormularioUsuarios
from gestionDeUsuarios.models import usuarios

def usuario(request):
    if request.method == "POST":
        miFormulario = FormularioUsuarios(request.POST)
        if miFormulario.is_valid():
            nuevo_usuario = usuarios(
                nombre=miFormulario.cleaned_data['nombre'],
                apellido=miFormulario.cleaned_data['apellido'],
                dni=miFormulario.cleaned_data['dni'],
                edad=miFormulario.cleaned_data['edad'],
                email=miFormulario.cleaned_data['email'],
                contraseña=miFormulario.cleaned_data['contraseña']
            )
            nuevo_usuario.save()
            return redirect('login')
    else:
        miFormulario = FormularioUsuarios()
    return render(request, "registro.html", {"form": miFormulario})

