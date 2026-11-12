// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: KOMPONEN HALAMAN
// ==================================================
export default function GunakanKatalog() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#34445B]">

      {/* BAGIAN 2A: NAVBAR */}
      <Navbar />

      {/* BAGIAN 2B: KONTEN UTAMA */}
      <section className="mx-auto max-w-5xl px-6 py-14">

        <span className="rounded-full bg-[#F4E7FF] px-4 py-2 text-sm font-bold text-purple-700">
          MISI 4 📚
        </span>

        <h1 className="mt-6 text-4xl font-black text-[#354B68]">
          Belajar Menggunakan Katalog!
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Katalog perpustakaan adalah daftar informasi tentang koleksi
          perpustakaan. Melalui katalog, kita bisa mencari judul buku,
          nama penulis, dan informasi lainnya.
        </p>

        {/* BAGIAN 2C: JENIS PENCARIAN KATALOG */}
        <div className="mt-9 rounded-3xl bg-[#F4E7FF] p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            🔍 Apa yang Bisa Dicari?
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            {/* KARTU JUDUL */}
            <div className="rounded-2xl bg-white p-5">
              <div className="text-4xl">📕</div>
              <h3 className="mt-3 font-bold">Judul Buku</h3>
              <p className="mt-2 text-sm text-gray-600">
                Mencari berdasarkan nama buku.
              </p>
            </div>

            {/* KARTU PENULIS */}
            <div className="rounded-2xl bg-white p-5">
              <div className="text-4xl">✍️</div>
              <h3 className="mt-3 font-bold">Nama Penulis</h3>
              <p className="mt-2 text-sm text-gray-600">
                Mencari buku berdasarkan penulisnya.
              </p>
            </div>

            {/* KARTU SUBJEK */}
            <div className="rounded-2xl bg-white p-5">
              <div className="text-4xl">🏷️</div>
              <h3 className="mt-3 font-bold">Subjek</h3>
              <p className="mt-2 text-sm text-gray-600">
                Mencari buku berdasarkan topik.
              </p>
            </div>

          </div>
        </div>

        {/* BAGIAN 2D: LANGKAH MENGGUNAKAN KATALOG */}
        <div className="mt-8 rounded-3xl bg-[#FFF0C9] p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            📝 Langkah Menggunakan Katalog
          </h2>

          <ol className="mt-4 list-inside list-decimal space-y-3 leading-7 text-gray-700">
            <li>Buka katalog perpustakaan atau OPAC.</li>
            <li>Pilih jenis pencarian, misalnya judul atau subjek.</li>
            <li>Masukkan kata kunci yang sudah dipilih.</li>
            <li>Tekan tombol cari.</li>
            <li>Periksa hasil pencarian dan catat lokasi buku.</li>
          </ol>
        </div>

        {/* BAGIAN 2E: NAVIGASI */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/cari-kata-kunci"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Misi Sebelumnya
          </Link>

          <Link
            href="/temukan-buku"
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