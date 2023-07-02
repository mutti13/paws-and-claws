#connecting views with urls
from django.urls import path
from back.views import pets_view as view
from django.contrib.auth import views as auth_views
from back.views import lfs_views as views



urlpatterns = [
    # path('upload/', view.uploadImage, name='image-upload'),
    path('cats/', view.getCats, name = 'listCats'),
    path('dogs/', view.getDogs, name = 'listDogs'),
    path('mycats/', views.getMyCats, name = 'myCats'),
    path('mydogs/', views.getMyDogs, name = 'myDogs'),
    path('<str:pk>/', view.getPetyId, name="pet-getbyID"),
    path('dog/<str:pk>/', view.getDogbyId, name="dog-getbyID"),
    path('update/<str:pk>/', view.updatePet, name="pet-update"),
    path('update/dogs/<str:pk>/', view.updateDog, name="dog-update"),
    path('delete/<str:pk>/', view.deletePet, name="pet-delete"),
    path('delete/dog/<str:pk>/', view.deleteDog, name="dog-delete"),
]