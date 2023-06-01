import { removeCartItem } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

/**
 * 전역상태를 이용하여 장바구니에 아이템을 제거하는 hook
 */
export const useRemoveCartItem = () => {
  const dispatch = useAppDispatch();

  const removeCartProduct = (id: string) => {
    dispatch(removeCartItem(id));
  };

  return removeCartProduct;
};
