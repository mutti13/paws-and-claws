#connecting views with urls
from django.urls import path
from back.views import stripe_views as views



urlpatterns = [
    path('webhook/', views.stripe_webhook_view, name='webhook')
]