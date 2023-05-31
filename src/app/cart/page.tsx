"use client";

import styles from "./cart.module.scss";
import { CartItem } from "@/components/cart/CartItem";
import { useAppSelector } from "@/redux/hooks";

export default function Cart() {
  const cartItem = useAppSelector((state) => state.cartReducer.cartItem);

  return (
    <main className={styles["main-container"]}>
      <section className={styles["product-container"]}>
        {/* 임시로 목업 데이터 적용 */}

        {Object.entries(cartItem).map(([key, value]) => {
          return (
            <CartItem
              key={key}
              id={key}
              name={value.name}
              originPrice={value.originPrice}
              price={value.price}
              tagInfo={value.tagInfo}
              option={value.selectedOption?.name}
              imageUrl={value.imageUrl}
              discountPercent={value.discountPercent}
            />
          );
        })}
      </section>
      <div className={styles["purchase-container"]}>
        <div className={styles["button-container"]}>
          <button className={styles.button}>
            <span className={styles["text-medium"]}>5개 | 29,0000원 </span>
            <span className={styles["text-bold"]}>구매하기</span>
          </button>
        </div>
      </div>
    </main>
  );
}
