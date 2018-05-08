from django.conf.urls import url
from .views import AllProductsView


urlpatterns = [
    url(r'^all$', AllProductsView.as_view(), name='all-products'),
]
