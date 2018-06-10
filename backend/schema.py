import graphene
from products.schema import ProductsQueryType

schema = graphene.Schema(query=ProductsQueryType)
