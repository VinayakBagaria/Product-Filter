from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Product(models.Model):
    COLORS = (
        ('Red', 'Red'),
        ('Black', 'Black'),
        ('Blue', 'Blue'),
        ('Green', 'Green'),
        ('Yellow', 'Yellow')
    )
    name = models.CharField(max_length=80)
    rating = models.FloatField(
        default=1.0,
        validators=[MaxValueValidator(5.0), MinValueValidator(1.0)]
    )
    price = models.PositiveIntegerField()
    discount = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100)]
    )
    brand = models.CharField(max_length=80)
    color = models.CharField(max_length=10, choices=COLORS)
