
"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";

// ==================================================
// BAGIAN 2: DATA MENU NAVIGASI BALITA
// ==================================================
const menus = [
  { name: "Beranda", href: "/dunia-kecil-owi" },
  { name: "Kenali Buku", href: "/dunia-kecil-owi/kenali-buku" },
  { name: "Cerita", href: "/dunia-kecil-owi/cerita" },
  { name: "Perpustakaan", href: "/dunia-kecil-owi/perpustakaan" },
  { name: "Permainan", href: "/dunia-kecil-owi/permainan" },
  { name: "Penutup", href: "/dunia-kecil-owi/penutup" },
];

// ==================================================
// BAGIAN 3: KOMPONEN NAVBAR BALITA
// ==================================================
export default function NavbarBalita() {
  return (
    <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">

      {/* LOGO DAN NAMA WEBSITE */}
      <Link href="/dunia-kecil-owi" className="flex items-center gap-3">
        <span className="text-4xl">🦉</span>

        <div>
          <h1 className="text-lg font-black text-[#354B68]">
            Petualangan Literasi
          </h1>

          <p className="text-xs font-medium text-gray-500">
            Dunia Seru Penuh Cerita
          </p>
        </div>
      </Link>

      {/* DAFTAR MENU */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="transition hover:text-[#E9A638]"
          >
            {menu.name}
          </Link>
        ))}
      </div>

    </nav>
  );
}
