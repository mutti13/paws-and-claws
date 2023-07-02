from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from back.models import Product, Order, OrderItems, ShippingAddress
from back.serializers import ProductSerializer, OrderSerializer
from rest_framework import status


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    
    user = request.user
    data = request.data

    orderItems = data['orderItems']
    addressSystem = data.get('shippingAddress')
     

    if data.get('shippingAddress') == '':
        send = data['deliverAddress']['address']
    else:
        send = data['shippingAddress']['address']
        

    if orderItems and len(orderItems) == 0:
        return Response({'detail' : 'No order items'}, status=status.HTTP_400_BAD_REQUEST)

    else:
        #(1) create order

        order = Order.objects.create(
            user=user,
            paymentMethod = data['paymentMethod'],
            taxPrice = data['taxPrice'],
            shippingPrice = data['shippingPrice'],
            totalPrice = data['totalPrice']  
        )
        #(2) create shipping address
    
        shipping = ShippingAddress.objects.create(
                order = order,
                address = send,
                city = data['shippingAddress']['city'],
                postalCode = data['shippingAddress']['postalCode'],
                name = data['shippingAddress']['name'],        
        )
        
        #(3) create order items and set the order to orderitem relationship 
        for i in orderItems:
            product = Product.objects.get(_id=i['product'])

            item = OrderItems.objects.create(
                product = product,
                order = order,
                name = product.name,
                qty = i['qty'],
                price = i['price'],
                image = product.image.url,
            )

        #(4) update stock
            product.countInStock -= item.qty
            product.save()

    serializer = OrderSerializer(order, many=False)
    return Response(serializer.data) 


#   FOR  ORDER LIST ON ADMIN PAGE
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrder(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders , many = True)
    return Response(serializer.data)

    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):

    user = request.user
    order = Order.objects.get(_id=pk)

    try:
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        
        else:
            Response({'detail' : 'Not authorized to view this order'}, status=status.HTTP_400_BAD_REQUEST)
    
    except:
        return Response({'detail' : 'Order does not exist'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)
