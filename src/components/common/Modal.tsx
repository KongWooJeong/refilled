"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export function Modal(props: ModalProps) {
  const { onClose, children } = props;

  const modalOverlay = useRef<HTMLDivElement>(null);

  function handleCloseClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === modalOverlay.current) {
      onClose();
    }
  }

  const modalContent = (
    <div
      ref={modalOverlay}
      className={styles["modal-overlay"]}
      onClick={handleCloseClick}
    >
      <div className={styles["modal"]}>{children}</div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}
