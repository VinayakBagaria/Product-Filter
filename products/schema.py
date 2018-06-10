from graphene import List, ObjectType, relay
from graphene_django import DjangoObjectType, filter
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
            'name': ['exact', 'icontains', 'istartswith'],
            'brand': ['exact', 'icontains'],
            'color': ['in'],
        }
        interfaces = (relay.Node, )


class ProductsQueryType(graphene.ObjectType):
    product = relay.Node.Field(ProductNode)
    all_products = DjangoFilterConnectionField(ProductNode)

    color = relay.Node.Field(ChoiceNode)
    all_colors = DjangoFilterConnectionField(ChoiceNode)

    def resolve_all_products(self, info):
        return Product.objects.all()

    def resolve_product(self, info, id):
        return Product.objects.get(pk=id)

    def resolve_all_colors(self, info):
        return Choices.objects.all()

    def resolve_color(self, info, id):
        return Choices.objects.get(pk=id)
