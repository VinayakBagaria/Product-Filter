import math
from django.db.models import Q
from rest_framework import generics, mixins

from rest_framework.pagination import PageNumberPagination

from .models import Product, Choices
from .serializers import ProductSerializer, ChoicesSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'


class AllProductsView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        qs = Product.objects.all()

        lower_price = self.request.GET.get("pricelow") or 0
        higher_price = self.request.GET.get("pricehigh")

        color = self.request.GET.get("colors") or []
        color_array = []
        if len(color):
            for c in color.split(','):
                try:
                    color_pk = Choices.objects.get(color=c)
                    color_array.append(color_pk.id)
                except:
                    pass

        brand = self.request.GET.get("brand") or ''
        name = self.request.GET.get("name") or ''

        if(name):
            qs = qs.filter(name__contains=name).distinct()

        if(brand):
            qs = qs.filter(brand__contains=brand).distinct()

        qs = qs.filter(price__gte=lower_price).distinct()

        if len(color_array):
            qs = qs.filter(color__in=color_array).distinct()

        if higher_price:
            qs = qs.filter(price__lte=higher_price).distinct()

        if len(color) != 0 and len(color_array) == 0:
            qs = ''

        return qs

    def perform_create(self, serializer):
        serializer.save()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}


class AllColorsView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class = ChoicesSerializer

    def get_queryset(self):
        qs = Choices.objects.all()
        return qs

    def perform_create(self, serializer):
        serializer.save()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}
