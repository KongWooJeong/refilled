import { addCartItem } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

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
  selectedOption: ProductOption | null;
}

/**
 * 전역상태를 이용하여 장바구니에 아이템을 저장하는 hook
 */
export const useAddCartItem = () => {
  const dispatch = useAppDispatch();

  const addCart = (product: Product) => {
    dispatch(addCartItem(product));
  };

  return addCart;
};
