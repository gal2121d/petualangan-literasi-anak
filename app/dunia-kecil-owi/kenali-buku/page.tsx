
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

const pictures = [
  { icon: "🐱", name: "Kucing", audio: "kucing.mp3.wav", color: "#E2F3FF" },
  { icon: "🐦", name: "Burung", audio: "burung.mp3.wav", color: "#FFF0CC" },
  { icon: "🐸", name: "Katak", audio: "kodok.mp3.wav", color: "#FFE8DF" },
  { icon: "🐮", name: "Sapi", audio: "sapi.mp3.wav", color: "#E4F5DF" },
];

export default function KenaliBuku() {
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-6 pb-16">
        <div className="mb-12 text-center">
          {/* HIASAN KECIL OWI */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="text-xl">✨</span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DDF3FF] shadow-sm">
                <span className="text-3xl">🦉</span>
              </div>

              <span className="text-xl">🌼</span>
            </div>
          <p className="font-bold text-[#E9A638]">
            📚 Belajar mengenal gambar
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Ayo, Kenali Gambar!
          </h1>

          <p className="mt-3 text-gray-500">
          Tekan gambar untuk mendengarkan namanya.
        </p>

        {/* TOMBOL AUDIO PETUNJUK OWI */}
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => playAudio("petunjuk-gambar.wav")}
            className="rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow-lg transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Petunjuk Owi
          </button>
        </div>
        </div>

        {/* Kartu gambar */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {pictures.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => playAudio(item.audio)}
              style={{ backgroundColor: item.color }}
              className="w-full rounded-3xl border-2 border-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              aria-label={`Dengarkan suara ${item.name}`}
            >
              <span className="block text-6xl">{item.icon}</span>

              <span className="mt-3 block font-black text-[#354B68]">
                {item.name}
              </span>

              <span className="mt-2 block text-sm text-gray-600">
                🔊 Dengarkan
              </span>
            </button>
          ))}
        </div>

        {speechMessage && (
          <p
            role="status"
            aria-live="polite"
            className="mt-8 text-center text-sm font-semibold text-[#536B89]"
          >
            {speechMessage}
          </p>
        )}
      </section>

      <NavigasiBalita
        previousHref="/dunia-kecil-owi"
        nextHref="/dunia-kecil-owi/cerita"
      />

      <Footer />
    </main>
  );
}
