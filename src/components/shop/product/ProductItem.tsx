"use client";

import Image from "next/image";
import styles from "./productItem.module.scss";
import { useState } from "react";

import { ProductOptionModal } from "./ProductOptionModal";

import { formatNumber } from "@/utils/stringUtils";

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
  id: number;
  name: string;
  originPrice: number;
  price: number;
  discountPercent: number;
  tagInfo: Tag | "";
  description: string;
  imageUrl: string;
  productOptions: ProductOption[];
}

// 상품 할인룰이 0 인것을 의미한다.
const ZERO_PERCENT = 0;

export function ProductItem(props: ProductItemProps) {
  const {
    id,
    name,
    originPrice,
    price,
    discountPercent,
    tagInfo,
    description,
    imageUrl,
    productOptions,
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
      {isShowModal && (
        <ProductOptionModal
          productInfo={{
            id,
            name,
            originPrice,
            price,
            discountPercent,
            tagInfo,
            description,
            imageUrl,
            productOptions,
          }}
          onClose={hideModal}
        />
      )}
    </>
  );
}
