from django.shortcuts import render, redirect
from gestionDeTareas.forms import FormularioTareas
from gestionDeTareas.models import Tareas

def tareas(request, filtrar=None):
    if request.method == "POST":
        formulario = FormularioTareas(request.POST)
        if formulario.is_valid():
            tarea = Tareas(
                titulo=formulario.cleaned_data['titulo'],
                descripcion=formulario.cleaned_data['descripcion'],
                realizada=False
            )
            tarea.save()
    else:
        formulario = FormularioTareas()
    if filtrar == 'no_realizadas':
        tareas = Tareas.objects.filter(realizada=False)
    else:
        tareas = Tareas.objects.all()
    return render(request, "tareas.html", {"form": formulario, "tareas": tareas, "filtrar": filtrar})

def marcar_realizada(request, tarea_id):
    tarea = Tareas.objects.get(pk=tarea_id)
    tarea.realizada = True
    tarea.save()
    return redirect('tareas')

def eliminar_tarea(request, tarea_id):
    tarea = Tareas.objects.get(pk=tarea_id)
    tarea.delete()
    return redirect('tareas')
