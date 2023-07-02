#connecting views with urls
from django.urls import path
from back.views import order_views as views



urlpatterns = [
    path('', views.getOrder, name='orders'),
    path('add/', views.addOrderItems, name='orders-add'),
    path('myorders/', views.getMyOrders, name ='my-orders'),
    path('<str:pk>/', views.getOrderById, name='user-order')
]