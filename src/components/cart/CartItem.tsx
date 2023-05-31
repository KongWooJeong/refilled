import Image from "next/image";
import styles from "./cartItem.module.scss";

interface Tag {
  color: string;
  text: string;
}

interface CartItemProps {
  name: string;
  originPrice: number;
  price: number;
  discountPercent: number;
  tagInfo: Tag | "";
  description: string;
  imageUrl: string;
}

export function CartItem(props: CartItemProps) {
  const {
    name,
    originPrice,
    price,
    discountPercent,
    tagInfo,
    description,
    imageUrl,
  } = props;

  const renderCartItemPriceInfo = () => {
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
    <div className={styles["product-container"]}>
      <div className={styles["image-box"]}>
        <Image src={imageUrl} width={60} height={60} alt="product image" />
      </div>
      <div className={styles["content-container"]}>
        {tagInfo !== "" && (
          <div className={styles[`${tagInfo.color}-box`]}>{tagInfo.text}</div>
        )}
        <div className={styles["name-box"]}>{name}</div>
        <div className={styles["description-box"]}>{description}</div>
        <div className={styles["price-container"]}>
          {renderCartItemPriceInfo()}
        </div>
      </div>
      <div className={styles["close-button"]}>x</div>
    </div>
  );
}
