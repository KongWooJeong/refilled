"use client";

import { useRef, useState, MouseEvent } from "react";
import ReactDOM from "react-dom";

import styles from "./productOptionModal.module.scss";

interface ProductOptionModalProps {
  onClose: () => void;
}

export function ProductOptionModal(props: ProductOptionModalProps) {
  const { onClose } = props;

  const modalOverlay = useRef<HTMLDivElement>(null);
  const handleCloseClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === modalOverlay.current) {
      onClose();
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("옵션선택");

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
          <div className={styles["option-box"]} onClick={handleOpitionBoxClick}>
            {selectedOption}
          </div>
          {isMenuOpen && (
            <div className={styles["option-content"]}>
              <div
                onClick={() => {
                  handleOptionClick("profile");
                }}
              >
                profile
              </div>
              <div>write a post</div>
              <div>settings</div>
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
