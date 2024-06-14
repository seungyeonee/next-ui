import type { Metadata } from "next";
import "../styles/common.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Lnb from "@/components/layout/Lnb";

export const metadata: Metadata = {
  title: "SUI_v0.0.1",
  description: "Reusable UI with Nextjs v14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {/* <Header /> */}
        <Lnb />
        <main className="page-wrap">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
