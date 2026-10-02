import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AltBilgi from "../component/alt_bilgi";
import UstBaslik from "../component/ust_baslik";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quanteulix | Kuantum Teknolojileri",
    template: "%s | Quanteulix",
  },
  description:
    "Quanteulix, kuantum teknolojileri ve ileri mühendislik çözümleri geliştirir.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <UstBaslik />
        {children}
        <AltBilgi />
      </body>
    </html>
  );
}
