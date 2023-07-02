import stripe
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from back.models import Product
from back.models import OrderItems, Order
from back.serializers import ProductSerializer
from rest_framework import status
from django.core.mail import send_mail
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from datetime import datetime
from django.conf import settings


stripe.api_key = settings.STRIPE_SECRET_KEY

class CreateStripeCheckoutSession(APIView):
     def post(self, request, *args, **kwargs):
        order_id = self.kwargs['pk']
        try:
            order = Order.objects.get(_id = order_id)
            checkout_Session = stripe.checkout.Session.create(
                 line_items=[
                        {
                            'price_data':{
                                'currency' : 'pkr',
                                'unit_amount' : int(order.totalPrice) * 100,
                                 'product_data' : {
                                    'name' : order.paymentMethod,

                                 }
                                
                            },
                            'quantity' : 1,
                        },
                    ],
                    mode='payment',
                    metadata={
                        'order_id': order_id
                    },
                    success_url='http://localhost:3000/shop',
                    cancel_url='http://localhost:3000/final',

            )
            return redirect(checkout_Session.url)

        except Exception as e:
            return Response({'msg' : 'something wrong with stripe session', 'error' : str(e)}, status=500)
              

# @csrf_exempt
# def stripe_webhook_view(request):
#     payload = request.body
#     endpoint = 'whsec_8670034aff519906ce7e1a4e5a1483f57a5153040fa7c75c96015863cb95b614'
#     sig_header =request.META['HTTP_STRIPE_SIGNATURE']
#     event = None

#     try:
#         event = stripe.Webhook.construct_event(
#             payload, sig_header, endpoint
#         )
#     except ValueError as e:
#         return HttpResponse(status=400)

#     except stripe.error.SignatureVerificationError as e:
#         return HttpResponse(status=400)


#     if event['type'] == 'checkout.session.completed':
#         session = event['data']['object']

#         print('session' ,session)
#         customer_email = session['customer_details']['email']
#         order_id=session['metadata']['order_id']
#         #send an email
#         # send_mail(
#         #     subject='',
#         #     message=f'thanks for shopping',
#         #     recipient_list=[customer_email],
#         #     from_email='pawsNclaws@email.com'
#         # )

#         #create a payment history
#         orders = Order.objects.filter(_id = order_id)
#         orders.update(isPaid = True)
#         new_datetime_value = datetime.now()
#         orders.update(paidAt = new_datetime_value)
#         #Order.objects.filter(order._id == order_id).update(isPaid=True)

#     return HttpResponse(status=200)
         
#     print(payload)

#     return HttpResponse(status=200)


@csrf_exempt
def stripe_webhook_view(request):
    payload = request.body
    endpoint = 'whsec_8670034aff519906ce7e1a4e5a1483f57a5153040fa7c75c96015863cb95b614'
    sig_header =request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint
        )
    except ValueError as e:
        return HttpResponse(status=400)

    except stripe.error.SignatureVerificationError as e:
        return HttpResponse(status=400)


    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']

        print('session' ,session)
        customer_email = session['customer_details']['email']
        customer_name = session['customer_details']['name']
        print(customer_email)
        print(customer_name)
        order_id=session['metadata']['order_id']
        #send an email
        # send_mail(
        #     subject='Your Order has been placed',
        #     message=f'thanks for shopping',
        #     recipient_list=customer_email,
        #     from_email='pawsandclawsfyp2001@gmail.com'
        # )
        # send_mail(
        #     'Your Order',
        #     f'Thanks for shopping with us. Your order has been placed and will sonn be dispatched.',
        #     [customer_email],
        #     [email],
        #     fail_silently=False,
        # )

        #create a payment history
        orders = Order.objects.filter(_id = order_id)
        orders.update(isPaid = True)
        new_datetime_value = datetime.now()
        orders.update(paidAt = new_datetime_value)
        #Order.objects.filter(order._id == order_id).update(isPaid=True)

        link = f'http://localhost:3000/userprofile'
        send_mail(
            subject='Your Order has been placed',
            message=f'{customer_name} thanks for shopping with us. you can check your order details from here: {link}',
            recipient_list=[customer_email],
            from_email='pawsandclawsfyp2001@gmail.com'
        )

    return HttpResponse(status=200)
         
    print(payload)

    return HttpResponse(status=200)