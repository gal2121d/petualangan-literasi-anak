
"use client";

import { useState } from "react";
import NavbarBalita from "@/components/NavbarBalita";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

export default function CeritaOwi() {
  const [speechMessage, setSpeechMessage] = useState("");

  function playAudio(fileName: string) {
    const audio = new Audio(`/audio/${fileName}`);

    audio.play()
      .then(() => {
        setSpeechMessage("Owi sedang berbicara. Yuk, dengarkan!");
      })
      .catch(() => {
        setSpeechMessage(
          "Maaf, audio belum bisa diputar. Periksa kembali file suara Owi."
        );
      });
  }

  const story =
    "Suatu hari, Owi menemukan sebuah buku cerita. Owi membuka buku itu dan melihat gambar kelinci. Wah, ada banyak cerita seru di dalamnya!";

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <NavbarBalita />

      <section id="cerita" className="bg-[#EAF5FF] px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div className="text-center">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-8xl">🦉📖</div>
              <div className="mt-4 text-5xl">🌳 🐰 🌼</div>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#6A91B8]">
              📖 Waktunya mendengarkan
            </p>

           <h1 className="mt-2 text-2xl font-black text-[#354B68] md:text-3xl">
              Dengarkan Cerita Owi ya adik-adik🦉
            </h1>

            {/* LANGKAH 1: PETUNJUK OWI */}
            <div className="mt-4">

              <button
                type="button"
                onClick={() => playAudio("dengarkan-owi-cerita.wav")}
                className="rounded-xl border-2 border-[#F5B942] bg-white px-5 py-2 text-sm font-bold text-[#60451C] shadow-sm transition hover:-translate-y-1"
              >
                🔊 Dengarkan Petunjuk Owi
              </button>
            </div>

            {/* LANGKAH 2: ISI CERITA */}
            <div className="mt-7 rounded-3xl border-2 border-[#D5E9F8] bg-white p-5 shadow-sm">
              <p className="mb-3 font-extrabold text-[#354B68]">
                📚 Cerita Owi
              </p>

              <p className="leading-8 text-gray-600">
                {story}
              </p>

              <button
                type="button"
                onClick={() => playAudio("isi-cerita.wav")}
                className="mt-5 w-full rounded-2xl bg-[#F5B942] px-6 py-4 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1 hover:bg-[#F8C95E]"
              >
                🔊 Putar Cerita Owi
              </button>
            </div>

            {speechMessage && (
              <p
                role="status"
                aria-live="polite"
                className="mt-4 text-center text-sm font-semibold text-[#536B89]"
              >
                {speechMessage}
              </p>
            )}
          </div>
        </div>
      </section>

      <NavigasiBalita
        previousHref="/dunia-kecil-owi/kenali-buku"
        nextHref="/dunia-kecil-owi/perpustakaan"
      />

      <Footer />
    </main>
  );
}
