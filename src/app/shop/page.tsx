import styles from "./shop.module.scss";
import Image from "next/image";
import menuIcon from "../../../public/icon/menu.svg";
import cartIcon from "../../../public/icon/cart.svg";

import { ProductItem } from "@/components/shop/product/ProductItem";

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
      <main className={styles["main-container"]}>
        <div className={styles["content-box"]}>
          <p>사이토카인.</p>
          <p>완벅한 탈모케어를 위한 선택</p>
        </div>
        <section className={styles["product-box"]}>
          {/* 스타일 설정을 위한 임시 아이템 선언, api 호출 작업시 변경 예정 */}
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </section>
      </main>
    </div>
  );
}
