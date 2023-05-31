import "normalize.css";

import { Header } from "@/components/common/Header";
import styles from "./rootLayout.module.scss";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles["root-container"]}>
          <div className={styles["page-container"]}>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
