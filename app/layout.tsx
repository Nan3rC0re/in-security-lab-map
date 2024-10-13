import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import MapboxMap from "@/components/ui/mapbox";
import { FeatureProvider } from "@/context/FeatureContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Unequal Justice: Women and Nazi War Crimes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <FeatureProvider>
          <main className="w-full h-[calc(100vh-90px)] p-4 flex flex-col md:flex-row gap-2 mt-[50px]">
            <div className="w-full md:w-1/2 h-full overflow-auto">
              {children}
            </div>
            <div className="w-full md:w-1/2 h-full">
              <MapboxMap />
            </div>
          </main>
        </FeatureProvider>
        <Footer />
      </body>
    </html>
  );
}