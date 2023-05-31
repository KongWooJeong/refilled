"use client";

import Image from "next/image";
import styles from "./productItem.module.scss";
import { useState } from "react";

import { ProductOptionModal } from "./ProductOptionModal";

interface Tag {
  color: string;
  text: string;
}

interface ProductOption {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface ProductItemProps {
  name: string;
  originPrice: number;
  price: number;
  discountPercent: number;
  tagInfo: Tag | "";
  description: string;
  imageUrl: string;
  productOptions: ProductOption[];
}

export function ProductItem(props: ProductItemProps) {
  const {
    name,
    originPrice,
    price,
    discountPercent,
    tagInfo,
    description,
    imageUrl,
  } = props;

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  function showModal(): void {
    setIsShowModal(true);
  }

  function hideModal(): void {
    setIsShowModal(false);
  }

  function handleProductClick(): void {
    showModal();
  }

  const renderProductPriceInfo = () => {
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
    <>
      <div className={styles["product-container"]} onClick={handleProductClick}>
        <div className={styles["image-box"]}>
          <Image src={imageUrl} width={168} height={168} alt="product image" />
        </div>
        {tagInfo !== "" && (
          <div className={styles[`${tagInfo.color}-box`]}>{tagInfo.text}</div>
        )}
        <div className={styles["name-box"]}>{name}</div>
        <div className={styles["description-box"]}>{description}</div>
        {renderProductPriceInfo()}
      </div>
      {isShowModal && <ProductOptionModal onClose={hideModal} />}
    </>
  );
}
