from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from back.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken
from rest_framework import status
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from back.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken, ForgotPasswordSerializer
from rest_framework import status
from django.contrib.auth.views import PasswordResetView
from django.urls import reverse_lazy
from django.views.generic import TemplateView
from back.models import ForgotPassword, FindPet, FindDog
from django.contrib.auth.views import PasswordResetConfirmView
import json
# from .image_matching import model, predict_similarity
# from .image_matching1 import model, predict_similarity1
import secrets
from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.contrib.auth.models import User
from django.utils.crypto import get_random_string
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.utils.crypto import get_random_string
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from back.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken
from rest_framework import status
from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from back.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken, ForgotPasswordSerializer, VerifyEmailSerializer,CatImageSerializer,DogImageSerializer
from rest_framework import status
from django.contrib.auth.views import PasswordResetView
from django.urls import reverse_lazy
from django.views.generic import TemplateView
from back.models import ForgotPassword, FindPet, VerifyEmail,catImage,dogImage
from django.contrib.auth.views import PasswordResetConfirmView
import json
import os
import cv2
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
import joblib  # For saving and loading the model
from keras.applications.vgg16 import VGG16
from keras.applications.vgg16 import preprocess_input
import secrets
from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.contrib.auth.models import User
from django.utils.crypto import get_random_string
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.utils.crypto import get_random_string
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.db.models import Q

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data = super().validate(attrs)

        # data['username'] = self.user.username
        # data['email'] = self.user.email
        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k] = v

        return data
     

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def getPassword(request):

        data = request.data
        email = data['email']

        try:
            user = User.objects.get(email=email)
            serializer = UserSerializerWithToken(user, many=False)
            secret_key = secrets.token_hex(16)
            forgotPassword = ForgotPassword.objects.create(
            user = user,
            email = data['email'],
            secret = secret_key,
        )

            serializer = ForgotPasswordSerializer(forgotPassword, many=False)
            link = f'http://localhost:3000/reset-password?token={email}:{secret_key}'
            send_mail(
                'Password reset',
                f'Click the link to reset your password: {link}',
                {email},
                [email],
                fail_silently=False,
            )
        
            return Response({'message': 'Email sent successfully'}, status=200)

        except:
            message = {'detail' : 'User with this email does not exist'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
            

        # Generate a random secret key
        # secret_key = secrets.token_hex(16)
        # user = User.objects.get(email=email)

        # # Save the email and secret key in the database
        # # user.password_reset_key = json.dumps({
        # #     'email': email,
        # #     'secret_key': secret_key
        # # })
        # # user.save()

        # forgotPassword = ForgotPassword.objects.create(
        #     user = user,
        #     email = data['email'],
        #     secret = secret_key,
        # )

        # serializer = ForgotPasswordSerializer(forgotPassword, many=False)
       
        # #Send an email to the user with the password reset link
        # try:
        #     link = f'http://localhost:3000/reset-password?token={email}:{secret_key}'
        #     send_mail(
        #         'Password reset',
        #         f'Click the link to reset your password: {link}',
        #         {email},
        #         [email],
        #         fail_silently=False,
        #     )
        
        #     return Response({'message': 'Email sent successfully'}, status=200)
        # except:
        #     return Response({'message': 'Email sent request failed'}, status=500)



@api_view(['POST'])
def reset_password(request):
        
        data = request.data
        password = data.get('password')
        token = data.get('token')

        # Extract email and token from the token string
        # email, token = token.split(':')
        email, token = str(token).split(':')

        try:
            user = User.objects.get(email=email)

        except User.DoesNotExist:
            return JsonResponse({'message': 'Invalid token.'}, status=400)

        # Verify the token's validity and expiration time (add your own validation logic here)
        user = User.objects.get(email=email)
        forgotPassword = ForgotPassword.objects.get(secret=token)

        if forgotPassword.secret != token:
            return JsonResponse({'message': 'Invalid token.'}, status=400)

        # Reset the user's password
        user.set_password(password)
        user.save()
       
        forgotPassword.delete()


        return JsonResponse({'message': 'Password updated successfully.'}, status=200)

        # return JsonResponse({'message': 'Invalid request method.'}, status=400)


# @api_view(['POST'])
# def registerUser(request):
#     data = request.data
#     # email = data['email']
#     # email1 = user.objects.get(email=email)
#     # if email1:
#     #     return Response("Already exists")
#     try:
#         user = User.objects.create(
#             first_name = data['name'],
#             username = data['email'],
#             email = data['email'],
#             password = make_password(data['password'])
#         )

#         serializer = UserSerializerWithToken(user, many=False)
#         return Response(serializer.data)

#     # except:
#     #     return JsonResponse({'message': 'user with email already exists.'}, status=400)
#     except:
#         return JsonResponse({'error': 'User with email already exists.'}, status=400)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):

    user = request.user 
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    

    user.first_name = data['name'] 
    user.username = data['email'] 
    user.email = data['email']
    # if data['password'] != '':
    #     user.password = make_password(data['password'])
    password = data.get('password')
    if password:
        user.password = make_password(password)

    user.save()
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):

    user = request.user 
    serializer = UserSerializer(user,  many=False)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users,  many=True)
    return Response(serializer.data)




@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request,pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user,  many=False)
    return Response(serializer.data)





@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request,pk):

    user = User.objects.get(id=pk)

    data = request.data

    user.first_name = data['name'] 
    user.username = data['email'] 
    user.email = data['email']
    user.is_staff = data['isAdmin']

    user.save()
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)





@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request,pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')



@api_view(['POST'])
def findPet(request):
    data = request.data
    tag = data['tag']
    email = data['email']
    number = data['number']
    status = data['status']
    # print(email)
    user = User.objects.get(email=email)
    serializer = UserSerializerWithToken(user,many=False)


    try:
        # Check if a previous request exists for the user
        # existing_request = FindPet.objects.filter(email=email, number=number, status=status, pTag=tag).exists()
        

        existing_request_status_lost = FindPet.objects.filter(email=email, number=number, pTag=tag ,status="Lost").exists()

        existing_request_email = FindPet.objects.filter(email=email, number=number, pTag=tag , status="Found").exists()

        existing_request_status_lost_email = FindPet.objects.filter(email=email, pTag=tag, status="Lost").exists()

        existing_request_status_found_email = FindPet.objects.filter(email=email, pTag=tag, status="Found").exists()

        existing_request_status_lost_number = FindPet.objects.filter(number=number, pTag=tag, status="Lost").exists()

        existing_request_status_found_number = FindPet.objects.filter(number=number, pTag=tag, status="Found").exists()

        # existing_request_aa = FindPet.objects.filter(pTag=tag,status=status).exclude(email=email).exists()

        existing_request_status_lost_tag = FindPet.objects.filter(pTag=tag, status=status).exists()
        
        
        
        # existing_request_number = FindPet.objects.filter(email=email, number=number).exists()

        # if existing_request:
        #     return Response({'message': '1 You have already made a request with the same number and email. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_email:
            return Response({'message': '2 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_status_lost:
            return Response({'message': '3 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        # if existing_request_status_found:
        #     return Response({'message': 'found 1 You have already made a request with the same number and email. We have recorded your request, as soon as something comes up we will let you know'})


        if existing_request_status_lost_email:
            return Response({'message': '4 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_status_found_email:
            return Response({'message': '4 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})


        if existing_request_status_lost_number:
            return Response({'message': '5 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_status_found_email:
            return Response({'message': '4 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})


        if existing_request_status_lost_tag:
            return Response({'message': '6 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        # if existing_request_aa:
        #     return Response({'message':'A request on this pet already exists'})


        pet = FindPet.objects.get(pTag=tag)
        # user = User.objects.get(email=email)
        

        # Pet exists, send email and return success response
        link = f'https://www.instagram.com/'
        send_mail(
            'Lost Pet',
            f'Click the link to contact our team. This might help in reuniting a lost pet with their owner: {link}',
            email,
            [email],
            fail_silently=False,
        )
        return Response({'message': 'We might have the same pet in our shelter, please contact us on the email we sent you.'}, status=200)

    except FindPet.DoesNotExist:
        # Pet doesn't exist, create a new FindPet object and return appropriate response
        findPet = FindPet.objects.create(
            user = user,
            status=data['status'],
            area=data['area'],
            number=data['number'],
            pTag=data['tag'],
            email=data['email'],
            image=request.FILES.get('image'),
            category = data['category'],
            description = data['description']
        )
        # console.log(user)
        return Response({'message': 'There is no pet with that tag number in our website. We will notify you in case of further progress'})


@api_view(['POST'])
def findDog(request):
    data = request.data
    tag = data['tag']
    email = data['email']
    number = data['number']
    status = data['status']
    # print(email)
    user = User.objects.get(email=email)
    serializer = UserSerializerWithToken(user,many=False)


    try:
        # Check if a previous request exists for the user
        # existing_request = FindPet.objects.filter(email=email, number=number, status=status, pTag=tag).exists()
        

        existing_request_status_lost = FindDog.objects.filter(email=email, number=number, pTag=tag ,status="Lost").exists()

        existing_request_email = FindDog.objects.filter(email=email, number=number, pTag=tag , status="Found").exists()

        existing_request_status_lost_email = FindDog.objects.filter(email=email, pTag=tag, status="Lost").exists()

        existing_request_status_found_email = FindDog.objects.filter(email=email, pTag=tag, status="Found").exists()

        existing_request_status_lost_number = FindDog.objects.filter(number=number, pTag=tag, status="Lost").exists()

        existing_request_status_found_number = FindDog.objects.filter(number=number, pTag=tag, status="Found").exists()

        existing_request_status_lost_tag = FindDog.objects.filter(pTag=tag, status=status).exists()

        
        # existing_request_number = FindPet.objects.filter(email=email, number=number).exists()

        # if existing_request:
        #     return Response({'message': '1 You have already made a request with the same number and email. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_email:
            return Response({'message': '2 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_status_lost:
            return Response({'message': '3 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        # if existing_request_status_found:
        #     return Response({'message': 'found 1 You have already made a request with the same number and email. We have recorded your request, as soon as something comes up we will let you know'})


        if existing_request_status_lost_email:
            return Response({'message': '4 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_status_found_email:
            return Response({'message': '4 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})


        if existing_request_status_lost_number:
            return Response({'message': '5 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})

        if existing_request_status_found_email:
            return Response({'message': '4 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})


        if existing_request_status_lost_tag:
            return Response({'message': '6 You have already made a request with the same credentials. We have recorded your request, as soon as something comes up we will let you know'})



        pet = FindDog.objects.get(pTag=tag)
        # user = User.objects.get(email=email)
        

        # Pet exists, send email and return success response
        link = f'https://www.instagram.com/'
        send_mail(
            'Lost Pet',
            f'Click the link to contact our team. This might help in reuniting a lost pet with their owner: {link}',
            email,
            [email],
            fail_silently=False,
        )
        return Response({'message': 'We might have the same pet in our shelter, please contact us on the email we sent you.'}, status=200)

    except FindDog.DoesNotExist:
        # Pet doesn't exist, create a new FindPet object and return appropriate response
        findDog = FindDog.objects.create(
            user = user,
            status=data['status'],
            area=data['area'],
            number=data['number'],
            pTag=data['tag'],
            email=data['email'],
            image=request.FILES.get('image'),
            category = data['category'],
            description = data['description']
        )
        # console.log(user)
        return Response({'message': 'There is no pet with that tag number in our website. We will notify you in case of further progress'})

        
@api_view(['POST'])
def registerUser(request):
    data = request.data
    email = data['email']

    try:

        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password']),
            is_active = False
        )
        
        serializer = UserSerializerWithToken(user, many=False)
        #Generate verification code
        verification_code = get_random_string(length=10)

        verify_email = VerifyEmail.objects.create(
            user = user,
            code = verification_code
        )

        serializer = VerifyEmailSerializer(verify_email, many=False)
        send_mail(
                'Account Verification',
                f'Hi, please click the following link to verify your account: {verification_code}',
                email,  # Replace with your email address
                [email],
                fail_silently=False,
            )

        return Response("User created")
        
        # message = {'detail' : 'verification email sent'}
        # return Response(message)

    except:
        message = {'detail' : 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def verifyEmail(request):
    data = request.data
    code = data['code']
    yess = False
    try:
        verify = VerifyEmail.objects.get(code=code)
        user = verify.user
        user.is_active = True
        user.save()
        verify.delete()
        yess=True
        return Response(yess)
    except ObjectDoesNotExist:
        return Response(yess)





# @api_view(['POST'])
# def catImages(request):
#     data = request.data
#     user = request.user
#     serializer = UserSerializerWithToken(user,many=False)
#     print(user)
#     catt = catImage.objects.create(
#     user = user,
#     image=request.FILES.get('image'),
#     category = data['category'],
#     description = data['description'],
  
#     )
#     return Response({'message':'data sent'})





# @api_view(['POST'])
# def catImages(request):
#     data = request.data
#     email = data['email']
#     user = User.objects.get(email=email)
#     serializer = UserSerializerWithToken(user,many=False)

#     cat1 = catImage.objects.create(
#         user=user,
#         email=data['email'],
#         image=request.FILES.get('image'),
#         category=data['category'],
#         description=data['description'],
#     )

#     return Response({'message':'data sent'})




#       The Views for Model

# @api_view(['POST'])
# def catImages(request):
#     data = request.data
#     email = data['email']
#     user = User.objects.get(email=email)
#     serializer = UserSerializerWithToken(user, many=False)

#     cat1 = catImage.objects.create(
#         user=user,
#         email=data['email'],
#         image=request.FILES.get('image'),
#         category=data['category'],
#         description=data['description'],
#     )

#     # Perform image matching with the input image and database images
#     input_image = cv2.imread(cat1.image.path)  # Load the input image
#     database_images = catImage.objects.all()  # Get all database images, adjust this as per your model name

#     results = []
#     for db_image in database_images:
#         db_image_data = cv2.imread(db_image.image.path)  # Load the database image
#         similarity = predict_similarity(input_image, db_image_data, model)
#         print(similarity)
#         results.append({"image_id": db_image.id, "similarity": similarity})

#     return Response({"results": results})



# @api_view(['POST'])
# def dogImages(request):
#     data = request.data
#     email = data['email']
#     user = User.objects.get(email=email)
#     serializer = UserSerializerWithToken(user, many=False)

#     dog1 = dogImage.objects.create(
#         user=user,
#         email=data['email'],
#         image=request.FILES.get('image'),
#         category=data['category'],
#         description=data['description'],
#     )

#     # Perform image matching with the input image and database images
#     input_image = cv2.imread(dog1.image.path)  # Load the input image
#     database_images = dogImage.objects.all()  # Get all database images, adjust this as per your model name

#     results = []
#     for db_image in database_images:
#         db_image_data = cv2.imread(db_image.image.path)  # Load the database image
#         similarity = predict_similarity1(input_image, db_image_data, model)
#         print(similarity)
#         results.append({"image_id": db_image.id, "similarity": similarity})

#     return Response({"results": results})