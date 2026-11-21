
"use client";

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

  // ==================================================
  // BAGIAN 2A: FUNGSI SUARA OTOMATIS OWI
  // ==================================================
  function bacaTeks(teks: string) {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      alert("Maaf, fitur suara belum tersedia di browser ini.");
      return;
    }

    window.speechSynthesis.cancel();

    const suara = new SpeechSynthesisUtterance(teks);
    suara.lang = "id-ID";
    suara.rate = 0.95;
    suara.pitch = 1.2;
    suara.volume = 1;

    window.speechSynthesis.speak(suara);
  }

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

        {/* TOMBOL BACA PENJELASAN */}
        <div className="mt-5">
          <button
            type="button"
            onClick={() =>
              bacaTeks(
                "Halo teman-teman! Yuk, belajar menggunakan katalog! Katalog perpustakaan adalah daftar informasi tentang koleksi perpustakaan. Melalui katalog, kita bisa mencari judul buku, nama penulis, dan informasi lainnya."
              )
            }
            className="rounded-2xl bg-[#F5B942] px-5 py-3 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Penjelasan Owi
          </button>
        </div>

       
{/* BAGIAN 2C: JENIS PENCARIAN KATALOG */}
<div className="mt-7 rounded-3xl bg-[#F4E7FF] p-5">

  <div className="text-center">
    <h2 className="text-lg font-black text-[#354B68]">
      🔍 Apa yang Bisa Dicari?
    </h2>

    <button
      type="button"
      onClick={() =>
        bacaTeks(
          "Ada tiga hal yang bisa kita cari melalui katalog. Pertama, judul buku, yaitu mencari berdasarkan nama buku. Kedua, nama penulis, yaitu mencari buku berdasarkan penulisnya. Ketiga, subjek, yaitu mencari buku berdasarkan topik."
        )
      }
      className="mt-3 rounded-full bg-[#8B5AB5] px-4 py-2 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#75449D]"
    >
      🔊 Dengarkan Penjelasan Owi
    </button>
  </div>

  <div className="mt-4 grid grid-cols-3 gap-3">

    <div className="rounded-2xl bg-white p-3 text-center">
      <div className="text-3xl">📕</div>
      <h3 className="mt-2 text-sm font-bold text-[#354B68]">
        Judul Buku
      </h3>
      <p className="mt-1 text-xs leading-5 text-gray-600">
        Mencari berdasarkan nama buku.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-3 text-center">
      <div className="text-3xl">✍️</div>
      <h3 className="mt-2 text-sm font-bold text-[#354B68]">
        Nama Penulis
      </h3>
      <p className="mt-1 text-xs leading-5 text-gray-600">
        Mencari buku berdasarkan penulisnya.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-3 text-center">
      <div className="text-3xl">🏷️</div>
      <h3 className="mt-2 text-sm font-bold text-[#354B68]">
        Subjek
      </h3>
      <p className="mt-1 text-xs leading-5 text-gray-600">
        Mencari buku berdasarkan topik.
      </p>
    </div>

  </div>
</div>


{/* BAGIAN 2D: LANGKAH MENGGUNAKAN KATALOG */}
<div className="mt-6 rounded-3xl bg-[#FFF0C9] p-5">

  <h2 className="text-lg font-black text-[#354B68]">
    📝 Langkah Menggunakan Katalog
  </h2>

  <ol className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
    <li className="flex gap-2">
      <span className="font-extrabold text-[#A87519]">1.</span>
      <span>Buka katalog perpustakaan atau OPAC.</span>
    </li>
    <li className="flex gap-2">
      <span className="font-extrabold text-[#A87519]">2.</span>
      <span>Pilih jenis pencarian, misalnya judul atau subjek.</span>
    </li>
    <li className="flex gap-2">
      <span className="font-extrabold text-[#A87519]">3.</span>
      <span>Masukkan kata kunci yang sudah dipilih.</span>
    </li>
    <li className="flex gap-2">
      <span className="font-extrabold text-[#A87519]">4.</span>
      <span>Tekan tombol cari.</span>
    </li>
    <li className="flex gap-2">
      <span className="font-extrabold text-[#A87519]">5.</span>
      <span>Periksa hasil pencarian dan catat lokasi buku.</span>
    </li>
  </ol>

  {/* TOMBOL AUDIO DI BAWAH LANGKAH */}
  <div className="mt-4 text-center">
    <button
      type="button"
      onClick={() =>
        bacaTeks(
          "Yuk, ikuti lima langkah menggunakan katalog! Pertama, buka katalog perpustakaan atau OPAC. Kedua, pilih jenis pencarian, misalnya judul atau subjek. Ketiga, masukkan kata kunci yang sudah dipilih. Keempat, tekan tombol cari. Kelima, periksa hasil pencarian dan catat lokasi buku."
        )
      }
      className="rounded-full bg-[#F5B942] px-5 py-2 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:bg-[#F8C95E]"
    >
      🔊 Dengarkan Owi
    </button>
  </div>

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
