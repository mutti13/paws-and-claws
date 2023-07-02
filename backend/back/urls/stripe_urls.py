#connecting views with urls
from django.urls import path
from back.views import stripe_views as views



urlpatterns = [
    path('create-checkout-session/<int:pk>/', views.CreateStripeCheckoutSession.as_view(), name='checkout-session'),
]