import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/my-components/navbar";
import Footer from "@/components/my-components/footer";

import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unequal Justice: Women and Nazi-Era Crimes",
  description:
    "Explores these questions in the context of women's participation in Nazi Germany and the Holocaust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        <Navbar />
        <main className="w-full min-h-screen p-4 flex flex-col md:flex-row gap-2 mt-[95px] text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
