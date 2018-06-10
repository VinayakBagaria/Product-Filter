from graphene import List, ObjectType, relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .models import Product, Choices


class ChoiceNode(DjangoObjectType):
    class Meta:
        model = Choices
        filter_fields = ['color', ]
        interfaces = (relay.Node,)


class ProductNode(DjangoObjectType):
    class Meta:
        model = Product
        filter_fields = {
            'name': ['contains'],
            'brand': ['contains'],
            'color': ['in'],
            'price': ['gte', 'lte']
        }
        interfaces = (relay.Node, )


class ProductsQueryType(ObjectType):
    product = relay.Node.Field(ProductNode)
    all_products = DjangoFilterConnectionField(ProductNode)

    color = relay.Node.Field(ChoiceNode)
    all_colors = DjangoFilterConnectionField(ChoiceNode)
