from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Choices(models.Model):
    color = models.CharField(max_length=10)

    def __str__(self):
        return self.color


class Product(models.Model):
    name = models.CharField(max_length=80)
    rating = models.FloatField(
        default=1.0,
        validators=[MinValueValidator(1.0), MaxValueValidator(5.0)]
    )
    price = models.PositiveIntegerField(default=0)
    discount = models.PositiveSmallIntegerField(
        default=0,
        validators=[MaxValueValidator(100)]
    )
    brand = models.CharField(max_length=80)
    color = models.ManyToManyField(Choices)

    def __str__(self):
        return self.name
