import { useAppSelector } from "@/redux/hooks";

/**
 * 전역상태를 이용하여 장바구니에서 아이템을 가져오는 hook
 */
export const useGetCartItem = () => {
  const { totalCount, totalPrice, cartItem } = useAppSelector((state) => {
    return {
      totalCount: state.cartReducer.totalItemCount,
      totalPrice: state.cartReducer.totalItemPrice,
      cartItem: state.cartReducer.cartItem,
    };
  });

  return { totalCount, totalPrice, cartItem };
};
