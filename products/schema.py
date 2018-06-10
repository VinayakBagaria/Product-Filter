import graphene
from graphene_django import DjangoObjectType, filter
from .models import Product, Choices


class ChoiceType(DjangoObjectType):
    class Meta:
        model = Choices


class ProductType(DjangoObjectType):
    class Meta:
        model = Product


class ProductsQueryType(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    product = graphene.Field(ProductType, id=graphene.ID())

    all_colors = graphene.List(ChoiceType)
    color = graphene.Field(ChoiceType, id=graphene.ID())

    def resolve_all_products(self, info):
        return Product.objects.all()

    def resolve_product(self, info, id):
        return Product.objects.get(pk=id)

    def resolve_all_colors(self, info):
        return Choices.objects.all()

    def resolve_color(self, info, id):
        return Choices.objects.get(pk=id)
