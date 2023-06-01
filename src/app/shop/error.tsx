"use client";

import { useEffect } from "react";
import styles from "./shop.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로그 확인용 입니다.
    console.error(error);
  }, [error]);

  function handleRetryButtonClick() {
    reset();
  }

  return (
    <div className={styles["error-container"]}>
      <h2>문제가 발생하였습니다.</h2>
      <button onClick={handleRetryButtonClick}>Try again</button>
    </div>
  );
}
