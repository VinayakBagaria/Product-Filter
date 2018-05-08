from django.db.models import Q
from rest_framework import generics, mixins

from .models import Product
from .serializers import ProductSerializer


class AllProductsView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
