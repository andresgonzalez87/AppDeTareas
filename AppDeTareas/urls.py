
from django.contrib import admin
from django.urls import path
from gestionDeUsuarios import views
from gestionDeInicioDeSesion import view
from gestionDeTareas import views_
from gestionDeTareas import views_ as tareas_views


urlpatterns = [
    path('', view.inicioDeSesion, name='login'),
    path('admin/', admin.site.urls),
    path("registro/", views.usuario, name='registro'),
    path("tareas/", views_.tareas, name='tareas'),
    path("tareas/<str:filtrar>/", tareas_views.tareas, name='filtrar_tareas'),
    path("tareas/marcar_realizada/<int:tarea_id>/", tareas_views.marcar_realizada, name='marcar_realizada'),
    path("tareas/eliminar_tarea/<int:tarea_id>/", tareas_views.eliminar_tarea, name='eliminar_tarea'),
]

