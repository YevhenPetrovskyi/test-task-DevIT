import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const countAllProducts = () => {
  return prisma.product.count();
};

export const countAllProductsOnStock = (uuid: string) => {
  return prisma.stock.count({ where: { warehouseId: uuid } });
};

export const countProduct = async (sku: string) => {
  const product = await prisma.product.findFirstOrThrow({ where: { sku } });

  const stock = await prisma.stock.aggregate({
    _sum: {
      quantity: true,
    },
    where: {
      productId: product.sku,
    },
  });

  return stock._sum.quantity;
};

export const countProductOnStock = async (uuid: string, sku: string) => {
  const stock = await prisma.stock.aggregate({
    _sum: {
      quantity: true,
    },
    where: {
      productId: sku,
      warehouseId: uuid,
    },
  });

  return stock._sum.quantity;
};

export const countProductByCategory = (slug: string) => {
  return prisma.productsCategory.count({
    where: {
      categoryId: slug,
    },
  });
};

export const countProductOnStockByCategory = async (
  uuid: string,
  slug: string
) => {
  const stock = await prisma.stock.aggregate({
    _sum: {
      quantity: true,
    },
    where: {
      productId: slug,
      warehouseId: uuid,
    },
  });

  return stock._sum.quantity;
};
