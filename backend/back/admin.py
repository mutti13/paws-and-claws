from django.contrib import admin
from .models import *


# Register your models here.

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItems)
admin.site.register(ShippingAddress)
admin.site.register(ForgotPassword)
admin.site.register(FindPet)
admin.site.register(VerifyEmail)
admin.site.register(FindDog)
admin.site.register(catImage)
admin.site.register(dogImage)

