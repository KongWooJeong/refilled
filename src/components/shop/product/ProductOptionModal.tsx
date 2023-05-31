"use client";

import { useRef, useState, MouseEvent } from "react";
import ReactDOM from "react-dom";

import styles from "./productOptionModal.module.scss";

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
  const [selectedOption, setSelectedOption] = useState<string>("옵션선택");

  const modalOverlay = useRef<HTMLDivElement>(null);

  function handleCloseClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === modalOverlay.current) {
      onClose();
    }
  }

  function handleOpitionBoxClick() {
    setIsMenuOpen((state) => !state);
  }

  function handleOptionClick(option: string) {
    setSelectedOption(option);
    setIsMenuOpen(false);
  }

  const modalContent = (
    <div
      ref={modalOverlay}
      className={styles["modal-overlay"]}
      onClick={handleCloseClick}
    >
      <div className={styles["modal"]}>
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
            {selectedOption}
          </div>
          {isMenuOpen && (
            <div className={styles["option-content"]}>
              {productInfo.productOptions.map((option) => {
                return (
                  <div
                    key={option.id}
                    onClick={() => {
                      handleOptionClick(option.name);
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
          <button className={styles.button}>장바구니 담기</button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}
