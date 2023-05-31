import styles from "./shop.module.scss";
import Image from "next/image";
import menuIcon from "../../../public/icon/menu.svg";
import cartIcon from "../../../public/icon/cart.svg";
import { ProductItem } from "@/components/shop/product/ProductItem";
import { shopRepository } from "@/data/repository/shopRepository";

export default async function Shop() {
  const productList = await shopRepository.getShopProductList();

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
          {productList.map((item) => {
            return (
              <ProductItem
                key={item.id}
                name={item.name}
                description={item.description}
                originPrice={item.originPrice}
                price={item.price}
                discountPercent={item.discountPercent}
                tagInfo={item.tagInfo}
                imageUrl={item.imageUrl}
                productOptions={item.productOptions}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}
