
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

const pictures = [
  { icon: "🐱", name: "Kucing", audio: "kucing.wav", color: "#E2F3FF" },
  { icon: "🐦", name: "Burung", audio: "burung.wav", color: "#FFF0CC" },
  { icon: "🐸", name: "Katak", audio: "katak.wav", color: "#FFE8DF" },
  { icon: "🐮", name: "Sapi", audio: "sapi.wav", color: "#E4F5DF" },
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="font-bold text-[#E9A638]">
            📚 Belajar mengenal gambar
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Ayo, Kenali Gambar!
          </h1>

          <p className="mt-3 text-gray-500">
            Tekan gambar untuk mendengarkan namanya.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {pictures.map((item) => (
            <div
              key={item.name}
              style={{ backgroundColor: item.color }}
              className="rounded-3xl border-2 border-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <span className="block text-6xl">{item.icon}</span>

              <span className="mt-3 block font-black text-[#354B68]">
                {item.name}
              </span>

              <button
                type="button"
                onClick={() => playAudio(item.audio)}
                className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-bold text-[#354B68] shadow-sm transition hover:bg-[#FFF5D9]"
                aria-label={`Dengarkan suara ${item.name}`}
              >
                🔊 Dengarkan
              </button>
            </div>
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
