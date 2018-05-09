from django.conf.urls import url
from .views import AllProductsView, AllColorsView


urlpatterns = [
    url(r'^all$', AllProductsView.as_view(), name='all-products'),
    url(r'^colors$', AllColorsView.as_view(), name='all-color'),
]
