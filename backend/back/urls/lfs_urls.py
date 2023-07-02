#connecting views with urls
from django.urls import path
from back.views import lfs_views as views



urlpatterns = [
    path('mylfs/', views.getMyLfs, name ='my-orders'),
]