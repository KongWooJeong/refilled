import styles from "./cart.module.scss";

import { CartItem } from "@/components/cart/CartItem";

export default function Cart() {
  return (
    <main className={styles["main-container"]}>
      <section className={styles["product-container"]}>
        {/* 임시로 목업 데이터 적용 */}
        <CartItem
          name="헤어 리커버리 사이토카인™ 샴푸 플러스"
          originPrice={66500}
          price={29000}
          tagInfo={{ color: "gray", text: "NEW" }}
          description="탈모케어를 위한 최고의 제품"
          imageUrl="https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914274085.jpg"
          discountPercent={50}
        />
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
