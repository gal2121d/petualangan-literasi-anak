
 // ==================================================
 // BAGIAN 1: IMPORT
 // ==================================================
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

// ==================================================
// BAGIAN 2: INFORMASI WEBSITE
// ==================================================
export const metadata: Metadata = {
  title: "Petualangan Literasi Anak",
  description:
    "Website edukasi interaktif untuk membantu anak mengenal perpustakaan, mencari informasi, dan menemukan buku.",
};

// ==================================================
// BAGIAN 3: KERANGKA UTAMA WEBSITE
// ==================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
