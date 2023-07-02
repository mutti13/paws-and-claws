#connecting views with urls
from django.urls import path
from back.views import user_views as views



urlpatterns = [
    path('verify/', views.verifyEmail, name='verify-email'),
    path('password/', views.getPassword, name='forgot-user-password'),
    path('reset-password/', views.reset_password, name='reset-password'),
    path('find-pet/', views.findPet, name='find-pet'),
    path('find-dog/', views.findDog, name='find-pet'),
    # path('cat-image/', views.catImages, name='catImage'),
    # path('dog-image/', views.dogImages, name='dogImage'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="users-profile-update"),
    path('register/', views.registerUser, name = 'register'),
    path('', views.getUsers, name="users"),
   

    path('<str:pk>/', views.getUserById, name="user"),
    path('update/<str:pk>/', views.updateUser, name="user-update"),
    path('delete/<str:pk>/', views.deleteUser, name="user-delete"),
   
]