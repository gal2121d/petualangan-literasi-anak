// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";

// ==================================================
// BAGIAN 2: KOMPONEN FOOTER
// ==================================================
export default function Footer() {
  return (
    <footer className="mt-16 bg-[#354B68] px-6 py-8 text-center text-sm text-white">

      {/* BAGIAN 2A: MASKOT */}
      <p className="text-3xl">🦉</p>

      {/* BAGIAN 2B: NAMA WEBSITE */}
      <p className="mt-2 font-bold">
        Petualangan Literasi Anak
      </p>

      {/* BAGIAN 2C: DESKRIPSI */}
      <p className="mt-1 text-blue-100">
        Belajar, Membaca, dan Bermain Bersama Owi!
      </p>

      {/* BAGIAN 2D: TOMBOL KEMBALI */}
      <Link
        href="/"
        className="mt-4 inline-block font-semibold hover:text-yellow-300"
      >
        Kembali ke Beranda
      </Link>

    </footer>
  );
}