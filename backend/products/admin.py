from django.contrib import admin

from .models import Product, Choices

admin.site.register(Product)
admin.site.register(Choices)
