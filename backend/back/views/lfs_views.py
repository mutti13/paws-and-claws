from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from back.models import Product, Order, OrderItems, ShippingAddress
from back.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken, ForgotPasswordSerializer,FindPetSerializer,FindDogSerializer
from rest_framework import status


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyCats(request):
    user = request.user
    cats = user.findpet_set.all()
    serializer = FindPetSerializer(cats,many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyDogs(request):
    user = request.user
    dogs = user.finddog_set.all()
    serializer = FindDogSerializer(dogs,many=True)
    return Response(serializer.data)
