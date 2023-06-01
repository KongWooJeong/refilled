"use client";

import Image from "next/image";
import styles from "./cartItem.module.scss";
import { formatNumber } from "@/utils/stringUtils";
import { useRemoveCartItem } from "@/hooks/cart/useRemoveCartItem";

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

// 상품 할인룰이 0 인것을 의미한다.
const ZERO_PERCENT = 0;

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

  const removeCartItem = useRemoveCartItem();

  function handleRemoveItemButtonClick() {
    removeCartItem(id);
  }

  function renderCartItemPriceInfo() {
    if (discountPercent === ZERO_PERCENT) {
      return (
        <div className={styles["origin-price-box"]}>
          {formatNumber(originPrice)}원
        </div>
      );
    } else {
      return (
        <>
          <div className={styles["origin-price-line-box"]}>
            {formatNumber(originPrice)}원
          </div>
          <div>
            <span className={styles["discount-percent-box"]}>
              {discountPercent}%
            </span>
            <span className={styles["discount-price-box"]}>
              {formatNumber(price)}원
            </span>
          </div>
        </>
      );
    }
  }

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
