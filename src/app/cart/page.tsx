import styles from "./cart.module.scss";

export default function Cart() {
  return (
    <main className={styles["main-container"]}>
      <section className={styles["product-container"]}>
        <div>cart</div>
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
