interface TagDTO {
  color: string;
  text: string;
}

interface ProductOptionDTO {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface ShopProductDTO {
  id: number;
  name: string;
  originPrice: number;
  price: number;
  tag: TagDTO | "";
  desc: string;
  imageUrl: string;
  productOptions: ProductOptionDTO[];
}

/**
 * shop 페이지
 * 상품리스트 정보
 */
const getShopProductList = (): Promise<ShopProductDTO[]> => {
  return fetch("https://file.refilled.co.kr/assignment/product.json")
    .then((response) => response.json())
    .then((data) => data as ShopProductDTO[]);
};

export const shopApi = {
  getShopProductList,
};
