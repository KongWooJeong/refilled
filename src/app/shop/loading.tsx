import styles from "./shop.module.scss";

export default function Loading() {
  return (
    <div className={styles["loading-container"]}>
      데이터를 가져오는 중입니다.
    </div>
  );
}
