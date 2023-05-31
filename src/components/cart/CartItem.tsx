"use client";

import Image from "next/image";
import styles from "./cartItem.module.scss";
import { removeCartItem } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

interface Tag {
  color: string;
  text: string;
}

interface CartItemProps {
  id: string;
  name: string;
  originPrice: number;
  price: number;
  discountPercent: number;
  tagInfo: Tag | "";
  option?: string;
  imageUrl: string;
}

export function CartItem(props: CartItemProps) {
  const {
    id,
    name,
    originPrice,
    price,
    discountPercent,
    tagInfo,
    option,
    imageUrl,
  } = props;

  const dispatch = useAppDispatch();

  function handleRemoveItemButtonClick() {
    dispatch(removeCartItem(id));
  }

  const renderCartItemPriceInfo = () => {
    if (discountPercent === 0) {
      return <div className={styles["origin-price-box"]}>{originPrice}원</div>;
    } else {
      return (
        <>
          <div className={styles["origin-price-line-box"]}>{originPrice}원</div>
          <div>
            <span className={styles["discount-percent-box"]}>
              {discountPercent}%
            </span>
            <span className={styles["discount-price-box"]}>{price}원</span>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles["product-container"]}>
      <div className={styles["image-box"]}>
        <Image src={imageUrl} width={60} height={60} alt="product image" />
      </div>
      <div className={styles["content-container"]}>
        {tagInfo !== "" && (
          <div className={styles[`${tagInfo.color}-box`]}>{tagInfo.text}</div>
        )}
        <div className={styles["name-box"]}>{name}</div>
        {option && <div className={styles["description-box"]}>{option}</div>}
        <div className={styles["price-container"]}>
          {renderCartItemPriceInfo()}
        </div>
      </div>
      <div
        className={styles["close-button"]}
        onClick={handleRemoveItemButtonClick}
      >
        x
      </div>
    </div>
  );
}
