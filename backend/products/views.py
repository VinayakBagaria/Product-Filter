import math
from django.db.models import Q
from rest_framework import generics, mixins

from rest_framework.pagination import PageNumberPagination

from .models import Product
from .serializers import ProductSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 10


class AllProductsView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        qs = Product.objects.all()
        lower_price = self.request.GET.get("pricelow") or 0
        higher_price = self.request.GET.get("pricehigh") or math.inf
        color = self.request.GET.get("color") or ''
        brand = self.request.GET.get("brand") or ''
        name = self.request.GET.get("name") or ''
        print(name)
        qs = qs.filter(price__gte=lower_price,
                       price__lte=higher_price).distinct()
        return qs

    def perform_create(self, serializer):
        serializer.save()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}
