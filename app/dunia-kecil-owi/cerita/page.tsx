"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

export default function CeritaOwi() {
  const [speechMessage, setSpeechMessage] = useState("");

  function speak(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSpeechMessage("Maaf, fitur suara belum tersedia di perangkat ini.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 1;
    utterance.pitch = 1.4;
    window.speechSynthesis.speak(utterance);
    setSpeechMessage("Owi sedang berbicara. Yuk, dengarkan!");
  }

  const story =
    "Suatu hari, Owi menemukan sebuah buku cerita. Owi membuka buku itu dan melihat gambar kelinci. Wah, ada banyak cerita seru di dalamnya!";

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <Navbar />
      <section id="cerita" className="bg-[#EAF5FF] px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div className="text-center">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-8xl">🦉📖</div>
              <div className="mt-4 text-5xl">🌳 🐰 🌼</div>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#6A91B8]">📖 Waktunya mendengarkan</p>
            <h1 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
              Dengarkan Cerita Owi
            </h1>
            <p className="mt-4 leading-8 text-gray-600">{story}</p>
            <button
              type="button"
              onClick={() => speak(story)}
              className="mt-6 rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1"
            >
              🔊 Dengarkan Cerita
            </button>
            {speechMessage && (
              <p role="status" aria-live="polite" className="mt-4 text-sm font-semibold text-[#536B89]">
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
