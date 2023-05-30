import styles from "./shop.module.scss";

export default function Shop() {
  return (
    <div className={styles["page-container"]}>
      <header className={styles["header-container"]}>
        <div className={styles["menu-box"]}>메뉴</div>
        <div className={styles["title-box"]}>Refilled</div>
        <div className={styles["cart-box"]}>장바구니</div>
      </header>
      <main></main>
    </div>
  );
}
