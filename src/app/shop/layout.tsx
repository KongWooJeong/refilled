import styles from "./shop.module.scss";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles["shop-container"]}>{children}</div>;
}
