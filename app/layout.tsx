import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "./globals.css";

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
    <html lang="tr">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
