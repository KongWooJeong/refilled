import Image from "next/image";
import styles from "./productItem.module.scss";

/**
 * 해당 컴포넌트에 각 내용은 현재 임시 정보 입니다.
 * 현재 스타일에만 관련하여 적용되었습니다.
 * 추후에 api 연결 작업시 해당 내용을 props로 추가할 예정입니다.
 */
export function ProductItem() {
  return (
    <div className={styles["product-container"]}>
      <Image
        src="https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914379618.jpg"
        width={168}
        height={168}
        alt="product image"
      />
      <div className={styles["best-box"]}>BEST</div>
      <div className={styles["name-box"]}>
        헤어 리커버리 사이토카인 프로그램
      </div>
      <div className={styles["description-box"]}>
        탈모케어를 위한 최고의 제품
      </div>
      <div className={styles["origin-price-box"]}>120,000원</div>
      <div>
        <span className={styles["discount-percent-box"]}>50%</span>
        <span className={styles["discount-price-box"]}>83,500원</span>
      </div>
    </div>
  );
}
