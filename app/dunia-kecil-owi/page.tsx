"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

export default function DuniaKecilOwi() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <Navbar />

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-[#FFF0C9] px-5 py-2 text-sm font-bold text-[#B47B20]">
            🌈 Dunia Kecil Owi
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#354B68] md:text-6xl">
            Halo, Adik-adik!
            <span className="mt-2 block text-[#F2A93B]">Yuk, Bermain!</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">
            Hai, adik-adik! Aku Owi. Yuk, kita bermain dan mengenal buku bersama!
          </p>

          <button
            type="button"
            onClick={() => {
              const audio = new Audio("/audio/sapaan-owi.mp3.webm");
              audio.play().catch(() => {
                alert("Audio belum bisa diputar. Periksa kembali file rekaman Owi.");
              });
            }}
            className="mt-6 rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow-lg transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Sapaan dari Owi
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-[#DDF3FF] md:h-96 md:w-96">
            <span className="absolute left-8 top-8 text-4xl">⭐</span>
            <span className="absolute right-8 top-12 text-3xl">✨</span>
            <span className="absolute bottom-10 left-8 text-3xl">🌼</span>
            <div className="text-center">
              <div className="text-[145px] leading-none drop-shadow-lg md:text-[180px]">🦉</div>
              <span className="mt-3 inline-block rounded-full bg-white px-7 py-2 font-black text-[#536B89] shadow">
                Halo, aku Owi!
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <p className="text-gray-500">Ayo mulai petualangan kecil kita!</p>
      </div>

      <NavigasiBalita nextHref="/dunia-kecil-owi/kenali-buku" nextLabel="Mulai Belajar" />
      <Footer />
    </main>
  );
}
