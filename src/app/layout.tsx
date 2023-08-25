import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="h-screen w-screen flex flex-row">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
