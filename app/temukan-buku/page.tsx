// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: KOMPONEN HALAMAN
// ==================================================
export default function TemukanBuku() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#34445B]">

      {/* BAGIAN 2A: NAVBAR */}
      <Navbar />

      {/* BAGIAN 2B: KONTEN UTAMA */}
      <section className="mx-auto max-w-5xl px-6 py-14">

        <span className="rounded-full bg-[#FFE6E0] px-4 py-2 text-sm font-bold text-orange-700">
          MISI 5 🧭
        </span>

        <h1 className="mt-6 text-4xl font-black text-[#354B68]">
          Saatnya Menemukan Buku!
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Hore! Kamu sudah belajar menggunakan katalog. Sekarang waktunya
          menemukan buku yang kamu cari di perpustakaan.
        </p>

        {/* BAGIAN 2C: LANGKAH MENEMUKAN BUKU */}
        <div className="my-9 space-y-5">

          {/* LANGKAH 1 */}
          <div className="flex gap-5 rounded-3xl bg-[#DDF3FF] p-6">
            <span className="text-4xl">1️⃣</span>

            <div>
              <h2 className="font-black text-[#354B68]">
                Perhatikan Nomor Panggil
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                Lihat nomor panggil atau informasi lokasi buku dari hasil katalog.
              </p>
            </div>
          </div>

          {/* LANGKAH 2 */}
          <div className="flex gap-5 rounded-3xl bg-[#FFF0C9] p-6">
            <span className="text-4xl">2️⃣</span>

            <div>
              <h2 className="font-black text-[#354B68]">
                Cari Rak Buku
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                Ikuti petunjuk lokasi untuk menemukan rak yang sesuai.
              </p>
            </div>
          </div>

          {/* LANGKAH 3 */}
          <div className="flex gap-5 rounded-3xl bg-[#E4F8E9] p-6">
            <span className="text-4xl">3️⃣</span>

            <div>
              <h2 className="font-black text-[#354B68]">
                Periksa Buku
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                Cocokkan judul dan penulis buku dengan informasi di katalog.
              </p>
            </div>
          </div>

          {/* LANGKAH 4 */}
          <div className="flex gap-5 rounded-3xl bg-[#F4E7FF] p-6">
            <span className="text-4xl">4️⃣</span>

            <div>
              <h2 className="font-black text-[#354B68]">
                Baca dan Jaga Buku
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                Setelah menemukan buku, kamu bisa membacanya sesuai aturan
                perpustakaan dan menjaga buku dengan baik.
              </p>
            </div>
          </div>

        </div>

        {/* BAGIAN 2D: PESAN PENYELESAIAN MISI */}
        <div className="rounded-3xl bg-[#FFF0C9] p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            🌟 Misi Berhasil!
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Sekarang kamu sudah tahu cara mencari buku mulai dari memilih
            topik sampai menemukan buku di rak. Hebat!
          </p>
        </div>

        {/* BAGIAN 2E: NAVIGASI */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/gunakan-katalog"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Misi Sebelumnya
          </Link>

          <Link
            href="/permainan"
            className="rounded-xl bg-[#F5B942] px-6 py-3 font-bold text-[#60451C]"
          >
            Lanjut ke Permainan →
          </Link>
        </div>

      </section>

      {/* BAGIAN 2F: FOOTER */}
      <Footer />

    </main>
  );
}