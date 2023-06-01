import "normalize.css";

import { Header } from "@/components/common/Header";
import styles from "./rootLayout.module.scss";
import { Providers } from "@/redux/Provider";
import { Noto_Sans_KR } from "next/font/google";

export const metadata = {
  title: "Refilled",
  description: "탈모 관리 상품 스토어",
};

const notoSansKR = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSansKR.className}>
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
