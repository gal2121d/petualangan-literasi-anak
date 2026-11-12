// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: KOMPONEN HALAMAN
// ==================================================
export default function CariKataKunci() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#34445B]">

      {/* BAGIAN 2A: NAVBAR */}
      <Navbar />

      {/* BAGIAN 2B: KONTEN UTAMA */}
      <section className="mx-auto max-w-5xl px-6 py-14">

        <span className="rounded-full bg-[#E4F8E9] px-4 py-2 text-sm font-bold text-green-700">
          MISI 3 🔎
        </span>

        <h1 className="mt-6 text-4xl font-black text-[#354B68]">
          Ayo Cari Kata Kunci!
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Setelah menentukan topik, sekarang kita perlu mencari kata kunci.
          Kata kunci adalah kata penting yang mewakili informasi yang ingin
          kita temukan.
        </p>

        {/* BAGIAN 2C: CONTOH KATA KUNCI */}
        <div className="mt-9 rounded-3xl bg-[#E4F8E9] p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            🐱 Contoh: Mencari Informasi tentang Kucing
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Topik yang dipilih adalah hewan, khususnya kucing.
            Kita bisa menggunakan beberapa kata kunci berikut:
          </p>

          {/* DAFTAR KATA KUNCI */}
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Kucing",
              "Makanan kucing",
              "Perawatan kucing",
              "Jenis kucing",
            ].map((word) => (
              <span
                key={word}
                className="rounded-full bg-white px-5 py-3 font-bold text-[#426A55] shadow-sm"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* BAGIAN 2D: TIPS MEMILIH KATA KUNCI */}
        <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-xl font-black text-[#354B68]">
            💡 Tips Memilih Kata Kunci
          </h2>

          <ul className="mt-4 list-inside list-disc space-y-3 leading-7 text-gray-600">
            <li>Gunakan kata yang berhubungan dengan topik.</li>
            <li>Pilih kata yang singkat dan jelas.</li>
            <li>Gunakan kata yang lebih khusus jika hasil pencarian terlalu banyak.</li>
            <li>Coba beberapa kata yang berbeda untuk mendapatkan informasi.</li>
          </ul>
        </div>

        {/* BAGIAN 2E: NAVIGASI */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/tentukan-topik"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Misi Sebelumnya
          </Link>

          <Link
            href="/gunakan-katalog"
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