import type { Metadata } from "next";
import "../styles/common.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Next ui v0.0.1",
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
        <Header />
        <div className="page-wrap">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
