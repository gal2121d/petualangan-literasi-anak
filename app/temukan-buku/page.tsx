
"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: KOMPONEN HALAMAN
// ==================================================
export default function TemukanBuku() {
  const router = useRouter();

  // ==================================================
  // BAGIAN 2A: STATE LANGKAH DAN POP-UP
  // ==================================================
  const [langkahTerbuka, setLangkahTerbuka] = useState(0);
  const [tampilPopup, setTampilPopup] = useState(false);

  // ==================================================
  // BAGIAN 2B: FUNGSI SUARA OTOMATIS OWI
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

  // ==================================================
  // BAGIAN 2C: DATA LANGKAH MISI
  // ==================================================
  const langkah = [
    {
      nomor: "1️⃣",
      judul: "Perhatikan Nomor Panggil",
      isi: "Lihat nomor panggil atau informasi lokasi buku dari hasil katalog.",
      warna: "bg-[#DDF3FF]",
    },
    {
      nomor: "2️⃣",
      judul: "Cari Rak Buku",
      isi: "Ikuti petunjuk lokasi untuk menemukan rak yang sesuai.",
      warna: "bg-[#FFF0C9]",
    },
    {
      nomor: "3️⃣",
      judul: "Periksa Buku",
      isi: "Cocokkan judul dan penulis buku dengan informasi di katalog.",
      warna: "bg-[#E4F8E9]",
    },
    {
      nomor: "4️⃣",
      judul: "Baca dan Jaga Buku",
      isi: "Setelah menemukan buku, kamu bisa membacanya sesuai aturan perpustakaan dan menjaga buku dengan baik.",
      warna: "bg-[#F4E7FF]",
    },
  ];

  // ==================================================
  // BAGIAN 2D: FUNGSI MEMBUKA LANGKAH + AUDIO OTOMATIS
  // ==================================================
  function bukaLangkah(index: number) {
    if (index !== langkahTerbuka) return;

    const item = langkah[index];
    const jumlahTerbuka = langkahTerbuka + 1;

    // Langkah langsung terbuka setelah diklik
    setLangkahTerbuka(jumlahTerbuka);

    // Hentikan suara sebelumnya
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      // Bacakan judul dan isi langkah
      const suara = new SpeechSynthesisUtterance(
        `${item.judul}. ${item.isi}`
      );

      suara.lang = "id-ID";
      suara.rate = 0.95;
      suara.pitch = 1.2;
      suara.volume = 1;

      window.speechSynthesis.speak(suara);
    }

    // KHUSUS LANGKAH 4
    // Popup muncul 4 detik setelah diklik,
    // tanpa menunggu suara Owi selesai
    if (index === 3) {
  setTimeout(() => {
    setTampilPopup(true);

    bacaTeks(
      "Siap Bermain Kuis?"
    );
  }, 11000);
}
  }

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

        <p className="mt-3 text-sm font-semibold text-gray-600">
          Ikuti langkah di bawah ini yaa!😀
        </p>

        {/* TOMBOL AUDIO PEMBUKA */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() =>
              bacaTeks(
                "Hore! Kamu sudah belajar menggunakan katalog. Sekarang waktunya menemukan buku yang kamu cari di perpustakaan. Ikuti langkah di bawah ini ya!"
              )
            }
            className="rounded-full bg-[#F5B942] px-5 py-2 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Owi
          </button>
        </div>

        {/* BAGIAN 2C: LANGKAH MENEMUKAN BUKU */}
        <div className="my-8 space-y-4">

          {langkah.map((item, index) => {
            const sudahTerbuka = index < langkahTerbuka;
            const bisaDibuka = index === langkahTerbuka;
            const terkunci = index > langkahTerbuka;

            // SEMUA LANGKAH YANG BELUM DIKLIK TETAP BLUR
            const harusBlur = !sudahTerbuka;

            return (
              <button
                key={item.judul}
                type="button"
                disabled={!bisaDibuka}
                onClick={() => bukaLangkah(index)}
                className={`w-full rounded-3xl p-5 text-left shadow-sm transition-all duration-300 ${
                  item.warna
                } ${
                  bisaDibuka
                    ? "cursor-pointer hover:-translate-y-1 hover:shadow-md"
                    : "cursor-default"
                }`}
              >
                <div className="flex items-center gap-4">

                  <span className="shrink-0 text-3xl">
                    {item.nomor}
                  </span>

                  <div className="min-w-0 flex-1">

                    {sudahTerbuka ? (
                      <div className="animate-[fadeIn_0.4s_ease-out]">
                        <h2 className="font-black text-[#354B68]">
                          {item.judul}
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {item.isi}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <h2
                          className={`font-black text-[#354B68] ${
                            harusBlur ? "blur-[3px] select-none" : ""
                          }`}
                        >
                          {item.judul}
                        </h2>

                        <p
                          className={`mt-2 text-sm text-gray-500 ${
                            harusBlur ? "blur-[3px] select-none" : ""
                          }`}
                        >
                          {item.isi}
                        </p>

                        <p className="mt-2 text-xs font-bold text-[#60451C]">
                          {bisaDibuka
                            ? "👆 Tekan untuk membuka langkah"
                            : terkunci
                            ? "🔒 Selesaikan langkah sebelumnya"
                            : ""}
                        </p>
                      </div>
                    )}

                  </div>

                  {sudahTerbuka && (
                    <span className="shrink-0 text-lg text-green-700">
                      ✓
                    </span>
                  )}

                </div>
              </button>
            );
          })}

        </div>

        {/* BAGIAN 2D: PESAN PENYELESAIAN MISI */}
        {langkahTerbuka === 4 && (
          <div className="animate-[fadeIn_0.5s_ease-out] rounded-3xl bg-[#FFF0C9] p-5 sm:p-6">
            <h2 className="text-xl font-black text-[#354B68]">
              🌟 Misi Berhasil!
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-700">
              Sekarang kamu sudah tahu cara mencari buku mulai dari memilih
              topik sampai menemukan buku di rak. Hebat!
            </p>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setTampilPopup(true)}
                className="rounded-full bg-[#F5B942] px-5 py-2.5 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:bg-[#F8C95E]"
              >
                🎮 Ayo Bermain Kuis!
              </button>
            </div>
          </div>
        )}

        {/* BAGIAN 2E: NAVIGASI */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/gunakan-katalog"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Misi Sebelumnya
          </Link>


        </div>

      </section>

      {/* BAGIAN 2F: POP-UP AJAKAN BERMAIN */}
      {tampilPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#34445B]/50 px-5">
          <div className="w-full max-w-sm animate-[fadeIn_0.3s_ease-out] rounded-3xl bg-[#FFFDF5] p-6 text-center shadow-xl">

            <div className="text-5xl">🦉</div>

            <h2 className="mt-3 text-xl font-black text-[#354B68]">
              Siap Bermain Kuis?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Hore! Kamu sudah menyelesaikan semua langkah. Yuk, lanjut
              bermain kuis bersama Owi!
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => router.push("/permainan")}
                className="rounded-2xl bg-[#F5B942] px-5 py-3 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:bg-[#F8C95E]"
              >
                🎮 Oke, Ayo Bermain!
              </button>

              <button
                type="button"
                onClick={() => setTampilPopup(false)}
                className="rounded-2xl border-2 border-[#354B68] px-5 py-3 text-sm font-bold text-[#354B68] transition hover:bg-[#EEF2F7]"
              >
                Belum, Nanti Dulu
              </button>
            </div>

          </div>
        </div>
      )}

      {/* BAGIAN 2G: FOOTER */}
      <Footer />

    </main>
  );
}
