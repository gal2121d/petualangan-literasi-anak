// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: DATA PILIHAN TOPIK
// Ubah ikon, nama, dan deskripsi topik di sini
// ==================================================
const topics = [
  {
    icon: "🐱",
    title: "Hewan",
    desc: "Kucing, gajah, kupu-kupu, dan hewan lainnya.",
  },
  {
    icon: "🌱",
    title: "Tumbuhan",
    desc: "Bunga, pohon, buah, dan tanaman.",
  },
  {
    icon: "🚀",
    title: "Luar Angkasa",
    desc: "Planet, bintang, bulan, dan matahari.",
  },
  {
    icon: "🏛️",
    title: "Sejarah",
    desc: "Cerita masa lalu dan tokoh bersejarah.",
  },
  {
    icon: "🌊",
    title: "Lingkungan",
    desc: "Laut, hutan, kebersihan, dan alam.",
  },
  {
    icon: "⚽",
    title: "Olahraga",
    desc: "Sepak bola, renang, dan permainan.",
  },
];

// ==================================================
// BAGIAN 3: KOMPONEN HALAMAN
// ==================================================
export default function TentukanTopik() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#34445B]">

      {/* BAGIAN 3A: NAVBAR */}
      <Navbar />

      {/* BAGIAN 3B: KONTEN UTAMA */}
      <section className="mx-auto max-w-6xl px-6 py-14">

        <span className="rounded-full bg-[#FFF0C9] px-4 py-2 text-sm font-bold text-[#B47B20]">
          MISI 2 💡
        </span>

        <h1 className="mt-6 text-4xl font-black text-[#354B68]">
          Tentukan Topik yang Kamu Sukai!
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Sebelum mencari buku, tentukan dahulu hal yang ingin kamu ketahui.
          Topik adalah pokok bahasan yang akan kamu cari informasinya.
          Pilih topik yang paling menarik bagimu!
        </p>

        {/* BAGIAN 3C: KARTU PILIHAN TOPIK */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="text-5xl">
                {topic.icon}
              </div>

              <h2 className="mt-4 text-xl font-black text-[#354B68]">
                {topic.title}
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BAGIAN 3D: CONTOH MENENTUKAN TOPIK */}
        <div className="mt-9 rounded-3xl bg-[#FFF0C9] p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            🌟 Contoh Menentukan Topik
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Misalnya, kamu ingin mengetahui cara merawat kucing.
            Maka, topik yang bisa kamu pilih adalah <strong>Hewan</strong>,
            khususnya tentang <strong>Kucing</strong>.
          </p>
        </div>

        {/* BAGIAN 3E: NAVIGASI */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/kenali-perpustakaan"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Misi Sebelumnya
          </Link>

          <Link
            href="/cari-kata-kunci"
            className="rounded-xl bg-[#F5B942] px-6 py-3 font-bold text-[#60451C]"
          >
            Misi Selanjutnya →
          </Link>
        </div>

      </section>

      {/* BAGIAN 3F: FOOTER */}
      <Footer />

    </main>
  );
}