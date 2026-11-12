// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: KOMPONEN HALAMAN
// ==================================================
export default function KenaliPerpustakaan() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#34445B]">

      {/* BAGIAN 2A: NAVBAR */}
      <Navbar />

      {/* BAGIAN 2B: KONTEN UTAMA */}
      <section className="mx-auto max-w-5xl px-6 py-14">

        <span className="rounded-full bg-[#DDF3FF] px-4 py-2 text-sm font-bold text-[#426A8B]">
          MISI 1 🏫
        </span>

        <h1 className="mt-6 text-4xl font-black text-[#354B68]">
          Kenali Perpustakaan!
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Hai, teman-teman! Perpustakaan adalah tempat untuk membaca,
          belajar, mencari informasi, dan meminjam buku. Di sini,
          kamu bisa menemukan banyak pengetahuan dan cerita menarik.
        </p>

        {/* BAGIAN 2C: MANFAAT PERPUSTAKAAN */}
        <div className="my-10 grid gap-5 sm:grid-cols-2">

          <div className="rounded-3xl bg-[#DDF3FF] p-7">
            <div className="text-5xl">📖</div>
            <h2 className="mt-4 text-xl font-black text-[#354B68]">
              Tempat Membaca
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              Kamu bisa membaca buku cerita, pengetahuan, dan buku pelajaran.
            </p>
          </div>

          <div className="rounded-3xl bg-[#FFF0C9] p-7">
            <div className="text-5xl">🔍</div>
            <h2 className="mt-4 text-xl font-black text-[#354B68]">
              Tempat Mencari Informasi
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              Kamu bisa mencari jawaban dari berbagai pertanyaan melalui buku.
            </p>
          </div>

          <div className="rounded-3xl bg-[#E4F8E9] p-7">
            <div className="text-5xl">🤝</div>
            <h2 className="mt-4 text-xl font-black text-[#354B68]">
              Tempat Belajar Bersama
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              Kamu dapat belajar dan berdiskusi dengan teman.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F4E7FF] p-7">
            <div className="text-5xl">🌟</div>
            <h2 className="mt-4 text-xl font-black text-[#354B68]">
              Tempat Menambah Pengetahuan
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              Setiap buku memiliki informasi baru yang bisa kamu pelajari.
            </p>
          </div>

        </div>

        {/* BAGIAN 2D: TAHUKAH KAMU */}
        <div className="rounded-3xl bg-[#FFF0C9] p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            💡 Tahukah Kamu?
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Perpustakaan tidak hanya menyediakan buku. Beberapa perpustakaan
            juga menyediakan komputer, internet, kegiatan membaca bersama,
            dan berbagai kegiatan untuk anak-anak.
          </p>
        </div>

        {/* BAGIAN 2E: NAVIGASI ANTARHALAMAN */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Beranda
          </Link>

          <Link
            href="/tentukan-topik"
            className="rounded-xl bg-[#F5B942] px-6 py-3 font-bold text-[#60451C]"
          >
            Misi Selanjutnya →
          </Link>
        </div>

      </section>

      {/* BAGIAN 2F: FOOTER */}
      <Footer />

    </main>
  );
}