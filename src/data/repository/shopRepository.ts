import { shopApi } from "../api/shopApi";

interface Tag {
  color: string;
  text: string;
}

interface ProductOption {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Product {
  id: number;
  name: string;
  originPrice: number;
  price: number;
  discountPercent: number;
  tagInfo: Tag | "";
  description: string;
  imageUrl: string;
  productOptions: ProductOption[];
}

const getShopProductList = async (): Promise<Product[]> => {
  const response = await shopApi.getShopProductList();

  return response.map((item) => {
    const discountPercent = (() => {
      const { price, originPrice } = item;
      let percent = 0;

      if (price < originPrice) {
        percent = ((originPrice - price) / originPrice) * 100;
      }

      return Math.floor(percent);
    })();

    return {
      id: item.id,
      name: item.name,
      originPrice: item.originPrice,
      price: item.price,
      discountPercent,
      tagInfo: item.tag,
      description: item.desc,
      imageUrl: item.imageUrl,
      productOptions: item.productOptions,
    };
  });
};

export const shopRepository = {
  getShopProductList,
};
