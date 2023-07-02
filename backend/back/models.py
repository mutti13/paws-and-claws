from django.db import models
from django.contrib.auth.models import User
# Create  your models here.
#models.Model will tell our class that this is a model

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True ,
            default='/placeholder.png')
    brand = models.CharField(max_length=200, null=True, blank=True) 
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank = True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True,default=0) 
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True,default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)


    def __str__(self):
         return self.name

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True,default=0) 
    comment = models.TextField(null=True, blank = True)
    createdAt = models.DateTimeField(auto_now_add=True)

    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return str(self.rating)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)

 

class OrderItems(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True,default=0) 
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.IntegerField(null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)

class ForgotPassword(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    secret = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.secret)
    
class FindPet(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    status = models.CharField(max_length=200)
    area = models.CharField(max_length=200, null=True, blank=True)
    date = models.DateField(auto_now_add=False, null=True, blank=True)
    number = models.CharField(max_length=200, null=True, blank=True)
    pTag = models.IntegerField(null=True, blank=True,default=0) 
    email = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    description = models.TextField(null=True, blank = True)
    category= models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return str(self.pTag)


class FindDog(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    status = models.CharField(max_length=200)
    area = models.CharField(max_length=200, null=True, blank=True)
    date = models.DateField(auto_now_add=False, null=True, blank=True)
    number = models.CharField(max_length=200, null=True, blank=True) 
    pTag = models.IntegerField(null=True, blank=True,default=0) 
    email = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    description = models.TextField(null=True, blank = True)
    category= models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return str(self.pTag)
    


class catImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    description = models.TextField(null=True, blank = True)
    email = models.CharField(max_length=200, null=True, blank=True)
    category= models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return str(self.category)
    



class dogImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    description = models.TextField(null=True, blank = True)
    email = models.CharField(max_length=200, null=True, blank=True)
    category= models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return str(self.category)



class VerifyEmail(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    code = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.code)
