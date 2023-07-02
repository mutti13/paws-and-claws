from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from back.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken, ForgotPasswordSerializer,FindPetSerializer,FindDogSerializer
from rest_framework import status
from django.contrib.auth.views import PasswordResetView
from django.urls import reverse_lazy
from django.views.generic import TemplateView
from back.models import ForgotPassword, FindPet, FindDog
from django.contrib.auth.views import PasswordResetConfirmView
import json
import secrets
from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.contrib.auth.models import User
from django.utils.crypto import get_random_string
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from back.models import FindPet
# Create your views here.
from back.views import lfs_views as views
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     def validate(self,attrs):
#         data = super().validate(attrs)

#         # data['username'] = self.user.username
#         # data['email'] = self.user.email
#         serializer = UserSerializerWithToken(self.user).data
#         for k,v in serializer.items():
#             data[k] = v

#         return data
     

# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer





@api_view(['GET'])
@permission_classes([IsAdminUser])
def getCats(request):
    cats = FindPet.objects.all()
    serializer = FindPetSerializer(cats,  many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getDogs(request):
    dogs = FindDog.objects.all()
    serializer =FindDogSerializer(dogs,  many=True)
    return Response(serializer.data)




@api_view(['GET'])
@permission_classes([IsAdminUser])
def getPetyId(request,pk):
    pet = FindPet.objects.get(_id=pk)
    serializer = FindPetSerializer(pet,  many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getDogbyId(request,pk):
    dog = FindDog.objects.get(_id=pk)
    serializer = FindDogSerializer(dog,  many=False)
    return Response(serializer.data)





@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updatePet(request,pk):

    pet = FindPet.objects.get(_id=pk)

    data = request.data

    pet.pTag = data.get('tag') 
    pet.email = data['email'] 
    pet.area = data['area']
    pet.number = data.get('phone')

    pet.save()
    serializer = FindPetSerializer(pet, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateDog(request,pk):

    dog = FindDog.objects.get(_id=pk)

    data = request.data

    dog.pTag = data.get('tag') 
    dog.email = data['email'] 
    dog.area = data['area']
    dog.number = data.get('phone')

    dog.save()
    serializer = FindDogSerializer(dog, many=False)
    return Response(serializer.data)



@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePet(request,pk):
    petForDeletion = FindPet.objects.get(_id=pk)
    petForDeletion.delete()
    return Response('Pet was deleted')



@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteDog(request,pk):
    dogForDeletion = FindDog.objects.get(_id=pk)
    dogForDeletion.delete()
    return Response('Dog was deleted')


# @api_view(['POST'])
# def uploadImage(request):
#     data =request.data
#     image = request.FILES.get('image')  # Retrieve the uploaded image file from the request

#     # Assuming you have a model named Product with an 'image' field
#     pet = FindPet.objects.create(image=image)  # Create a new product with the uploaded image
#     pet.save()

#     return Response('Image Uploaded')


# class UploadImageView(APIView):
#     def post(self, request):
#         image = request.data.get('image')

#         # Handle the image upload logic here

#         return Response({'message': 'Image uploaded successfully'})



# @api_view(['POST'])
# def uploadImage(request):
#     image = request.data.get('image')

#     # Handle the image upload logic here

#     return Response({'message': 'Image uploaded successfully'})

# @api_view(['POST'])
# def uploadImage(request):
#     image = request.FILES.get('image')

#     # Handle the image upload and database storage logic here
#     # For example, you can create a Pet object and save the image field

#     # Assuming you have a Pet model with an 'image' field
#     pet = FindPet(image=image)
#     pet.save()

#     return Response({pet})