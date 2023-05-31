"use client";

import { useRef, useState, MouseEvent } from "react";
import ReactDOM from "react-dom";

import styles from "./productOptionModal.module.scss";

interface ProductOption {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface ProductOptionModalProps {
  onClose: () => void;
  optionList: ProductOption[];
}

export function ProductOptionModal(props: ProductOptionModalProps) {
  const { onClose, optionList } = props;

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
        <div className={styles["name-box"]}>헤어 리커버리 사이토카인 키트</div>
        <div className={styles["select-box"]}>
          <div
            className={
              optionList.length === 0
                ? styles["empty-option-box"]
                : styles["option-box"]
            }
            onClick={handleOpitionBoxClick}
          >
            {selectedOption}
          </div>
          {isMenuOpen && (
            <div className={styles["option-content"]}>
              {optionList.map((option) => {
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
