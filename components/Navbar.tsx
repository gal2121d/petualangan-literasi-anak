// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";

// ==================================================
// BAGIAN 2: DATA MENU NAVIGASI
// Ubah nama dan alamat menu di bagian ini
// ==================================================
const menus = [
  { name: "Beranda", href: "/" },
  { name: "Kenali Perpustakaan", href: "/kenali-perpustakaan" },
  { name: "Tentukan Topik", href: "/tentukan-topik" },
  { name: "Cari Kata Kunci", href: "/cari-kata-kunci" },
  { name: "Gunakan Katalog", href: "/gunakan-katalog" },
  { name: "Temukan Buku", href: "/temukan-buku" },
  { name: "Permainan", href: "/permainan" },
];

// ==================================================
// BAGIAN 3: KOMPONEN NAVBAR
// ==================================================
export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">

      {/* BAGIAN 3A: LOGO DAN NAMA WEBSITE */}
      <Link href="/" className="flex items-center gap-3">
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

      {/* BAGIAN 3B: DAFTAR MENU */}
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