import graphene
from .models import Product, Choices


class ChoiceType(graphene.ObjectType):
    id = graphene.String()
    color = graphene.String()


class ProductType(graphene.ObjectType):
    id = graphene.String()
    name = graphene.String()
    rating = graphene.Float()
    price = graphene.String()
    discount = graphene.String()
    brand = graphene.String()
    color = graphene.List(lambda: ChoiceType)

    def resolve_color(self, args):
        return self.color.all()


class ProductsQueryType(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    product = graphene.Field(ProductType, id=graphene.ID())

    def resolve_all_products(self, args):
        return Product.objects.all()

    def resolve_product(self, args):
        id = args.get('id')
        return Product.objects.get(pk=id)
