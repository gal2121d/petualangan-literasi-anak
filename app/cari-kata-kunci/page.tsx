
"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: KOMPONEN HALAMAN
// ==================================================
export default function CariKataKunci() {
  const router = useRouter();

  // ==================================================
  // BAGIAN 2A: FUNGSI SUARA OTOMATIS OWI
  // ==================================================
  function bacaTeks(teks: string, pindahHalaman = false) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Maaf, fitur suara belum tersedia di browser ini.");
      return;
    }

    window.speechSynthesis.cancel();

    const suara = new SpeechSynthesisUtterance(teks);
    suara.lang = "id-ID";
    suara.rate = 0.95;
    suara.pitch = 1.2;
    suara.volume = 1;

    suara.onend = () => {
      if (pindahHalaman) {
        router.push("/gunakan-katalog");
      }
    };

    window.speechSynthesis.speak(suara);
  }

  // ==================================================
  // BAGIAN 2B: FUNGSI MEMILIH KATA KUNCI
  // ==================================================
  function pilihKataKunci(word: string) {
    bacaTeks(word, true);
  }

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
          Setelah menentukan topik, sekarang kita belajar mencari kata kunci.
          Kata kunci adalah kata penting yang membantu kita menemukan
          informasi yang dibutuhkan.
        </p>

        {/* TOMBOL BACA PENJELASAN */}
        <div className="mt-5">
          <button
            type="button"
            onClick={() =>
              bacaTeks(
                "Setelah menentukan topik, sekarang kita belajar mencari kata kunci. Kata kunci adalah kata penting yang membantu kita menemukan informasi yang dibutuhkan. Contoh: Mencari Informasi tentang Kucing, Topik yang kita pilih adalah hewan, khususnya kucing. Untuk mencari informasi tentang kucing, kita bisa menggunakan beberapa kata kunci, seperti kucing, makanan kucing, perawatan kucing, dan jenis kucing !! "
              )
            }
            className="rounded-2xl bg-[#F5B942] px-5 py-3 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Penjelasan Owi
          </button>
        </div>

        {/* BAGIAN 2C: CONTOH KATA KUNCI */}
        <div className="mt-9 rounded-3xl bg-[#E4F8E9] p-6 sm:p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            🐱 Contoh: Mencari Informasi tentang Kucing
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Topik yang kita pilih adalah hewan, khususnya kucing.
            Untuk mencari informasi tentang kucing, kita bisa menggunakan
            beberapa kata kunci, seperti:
          </p>

          {/* PILIHAN KATA KUNCI */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">

            {[
              { icon: "🐱", word: "Kucing" },
              { icon: "🥫🍗", word: "Makanan kucing" },
              { icon: "🧼", word: "Perawatan kucing" },
              { icon: "🐈", word: "Jenis kucing" },
            ].map((item) => (
              <button
                key={item.word}
                type="button"
                onClick={() => pilihKataKunci(item.word)}
                className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl bg-white px-3 py-4 text-center shadow-sm ring-1 ring-[#D5EBDD] transition hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-[#A8DDB5] focus:outline-none focus:ring-2 focus:ring-[#A8DDB5]"
              >
                <span className="text-4xl sm:text-5xl">
                  {item.icon}
                </span>

                <span className="mt-3 text-sm font-extrabold text-[#426A55] sm:text-base">
                  {item.word}
                </span>

                <span className="mt-3 rounded-full bg-[#E4F8E9] px-3 py-2 text-xs font-bold text-[#426A55]">
                  🔊 Tekan untuk memilih
                </span>
              </button>
            ))}

          </div>

          <p className="mt-6 text-center text-sm font-bold text-[#426A55] sm:text-base">
            Yuk pilih salah satu kata kunci, agar bisa masuk ke bagian selanjutnya! 😁
          </p>
        </div>

        
{/* BAGIAN 2D: TIPS MEMILIH KATA KUNCI */}
<div className="mt-8 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">

  <h2 className="text-lg font-black text-[#354B68]">
    💡 Tips Memilih Kata Kunci
  </h2>

  <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-6 text-gray-600">
    <li>Pilih kata yang sesuai dengan hal yang ingin kamu cari.</li>
    <li>Gunakan kata yang pendek dan mudah dimengerti.</li>
    <li>Kalau hasilnya terlalu banyak, coba gunakan kata yang lebih jelas.</li>
    <li>Coba kata lain jika belum menemukan informasi yang kamu cari.</li>
  </ul>

  {/* TOMBOL AUDIO DI BAWAH TIPS */}
  <div className="mt-4 text-center">
    <button
      type="button"
      onClick={() =>
        bacaTeks(
          "Yuk, dengarkan tips memilih kata kunci! Pertama, pilih kata yang sesuai dengan hal yang ingin kamu cari. Kedua, gunakan kata yang pendek dan mudah dimengerti. Ketiga, kalau hasilnya terlalu banyak, coba gunakan kata yang lebih jelas. Keempat, coba kata lain jika belum menemukan informasi yang kamu cari."
        )
      }
      className="rounded-full bg-[#F5B942] px-5 py-2 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:bg-[#F8C95E]"
    >
      🔊 Dengarkan Tips dari Owi
    </button>
  </div>

</div>


        {/* BAGIAN 2E: NAVIGASI */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/tentukan-topik"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Misi Sebelumnya
          </Link>


        </div>

      </section>

      {/* BAGIAN 2F: FOOTER */}
      <Footer />

    </main>
  );
}
