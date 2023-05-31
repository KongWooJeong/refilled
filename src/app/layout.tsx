import "normalize.css";

import { Header } from "@/components/common/Header";
import styles from "./rootLayout.module.scss";
import { Providers } from "@/redux/Provider";

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
        <Providers>
          <div className={styles["root-container"]}>
            <div className={styles["explain-container"]}>
              지금 바로
              <br /> 리필드를 검색하세요!
            </div>
            <div className={styles["page-container"]}>
              <Header />
              <div className={styles["main-container"]}>{children}</div>
              <div id="modal-root" />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
