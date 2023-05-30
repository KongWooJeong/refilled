import styles from "./shop.module.scss";
import Image from "next/image";
import menuIcon from "../../../public/icon/menu.svg";
import cartIcon from "../../../public/icon/cart.svg";

export default function Shop() {
  return (
    <div className={styles["page-container"]}>
      <header className={styles["header-container"]}>
        <div className={styles["menu-box"]}>
          <Image src={menuIcon} alt="menu" />
        </div>
        <div className={styles["title-box"]}>Refilled</div>
        <div className={styles["cart-box"]}>
          <Image src={cartIcon} alt="cart" />
        </div>
      </header>
      <main></main>
    </div>
  );
}
