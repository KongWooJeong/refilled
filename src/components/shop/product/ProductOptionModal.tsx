"use client";

import { useState } from "react";
import styles from "./productOptionModal.module.scss";

import { Modal } from "@/components/common/Modal";

import { useAddCartItem } from "@/hooks/cart/useAddCartItem";

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

interface ProductInfo {
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

interface ProductOptionModalProps {
  onClose: () => void;
  productInfo: ProductInfo;
}

export function ProductOptionModal(props: ProductOptionModalProps) {
  const { onClose, productInfo } = props;

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<ProductOption | null>(
    null
  );
  const addCart = useAddCartItem();

  function handleOpitionBoxClick() {
    setIsMenuOpen((state) => !state);
  }

  function handleOptionClick(option: ProductOption) {
    setSelectedOption(option);
    setIsMenuOpen(false);
  }

  function handleAddCartButtonClick() {
    addCart({
      id: productInfo.id,
      name: productInfo.name,
      originPrice: productInfo.originPrice,
      price: productInfo.price,
      discountPercent: productInfo.discountPercent,
      tagInfo: productInfo.tagInfo,
      description: productInfo.description,
      imageUrl: productInfo.imageUrl,
      selectedOption,
    });
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <div className={styles["name-box"]}>{productInfo.name}</div>
      <div className={styles["select-box"]}>
        <div
          className={
            productInfo.productOptions.length === 0
              ? styles["empty-option-box"]
              : styles["option-box"]
          }
          onClick={handleOpitionBoxClick}
        >
          {selectedOption === null ? "옵션선택" : selectedOption.name}
        </div>
        {isMenuOpen && (
          <div className={styles["option-content"]}>
            {productInfo.productOptions.map((option) => {
              return (
                <div
                  key={option.id}
                  onClick={() => {
                    handleOptionClick(option);
                  }}
                >
                  {option.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles["button-container"]}>
        <button className={styles.button} onClick={handleAddCartButtonClick}>
          장바구니 담기
        </button>
      </div>
    </Modal>
  );
}
