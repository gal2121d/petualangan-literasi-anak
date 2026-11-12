
"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";

// ==================================================
// BAGIAN 2: TIPE DATA KARTU MISI
// ==================================================
type KartuMisiProps = {
  nomor: number;
  icon: string;
  title: string;
  desc: string;
  href: string;
  color: string;
};

// ==================================================
// BAGIAN 3: KOMPONEN KARTU MISI
// ==================================================
export default function KartuMisi({
  nomor,
  icon,
  title,
  desc,
  href,
  color,
}: KartuMisiProps) {
  return (
    <Link
      href={href}
      className="block rounded-3xl border border-white p-6 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
      style={{ backgroundColor: color }}
    >
      {/* BAGIAN 3A: IKON KARTU */}
      <div className="mb-5 text-5xl">{icon}</div>

      {/* BAGIAN 3B: NOMOR MISI */}
      <p className="mb-2 text-sm font-bold text-gray-500">
        MISI {nomor}
      </p>

      {/* BAGIAN 3C: JUDUL KARTU */}
      <h3 className="text-lg font-black text-[#354B68]">
        {title}
      </h3>

      {/* BAGIAN 3D: DESKRIPSI KARTU */}
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {desc}
      </p>

      {/* BAGIAN 3E: TULISAN AJAKAN */}
      <p className="mt-5 font-bold text-[#526A87]">
        Ayo coba →
      </p>
    </Link>
  );
}
