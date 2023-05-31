import styles from "./header.module.scss";

import Image from "next/image";
import menuIcon from "../../../public/icon/menu.svg";
import cartIcon from "../../../public/icon/cart.svg";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles["header-container"]}>
      <Link className={styles["menu-box"]} href="/shop">
        <Image src={menuIcon} alt="menu" />
      </Link>
      <div className={styles["title-box"]}>Refilled</div>
      <Link className={styles["cart-box"]} href="/cart">
        <Image src={cartIcon} alt="cart" />
      </Link>
    </header>
  );
}
