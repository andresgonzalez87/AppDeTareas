from django.shortcuts import render, redirect
from gestionDeInicioDeSesion.forms import FormularioUsuarios
from gestionDeUsuarios.models import usuarios

def inicioDeSesion(request):
    if request.method == "POST":
        miFormulario = FormularioUsuarios(request.POST)
        if miFormulario.is_valid():
            email = miFormulario.cleaned_data['email']
            contraseña = miFormulario.cleaned_data['contraseña']
            try:
                usuario = usuarios.objects.get(email=email)
                if usuario.contraseña == contraseña:
                    return redirect('tareas') 
                else:
                    mensaje = "La contraseña es incorrecta."
            except usuarios.DoesNotExist:
                mensaje = "El email ingresado no existe. Regístrate para crear una cuenta."
            return render(request, "inicioDeSesion.html", {"form": miFormulario, "mensaje": mensaje})
    else:
        miFormulario = FormularioUsuarios()
    return render(request, "inicioDeSesion.html", {"form": miFormulario})


