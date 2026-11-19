"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

const pictures = [
  { icon: "🐱", name: "Kucing", color: "#E2F3FF" },
  { icon: "🐰", name: "Kelinci", color: "#FFF0CC" },
  { icon: "🍎", name: "Apel", color: "#FFE8DF" },
  { icon: "🍌", name: "Pisang", color: "#FFF5C9" },
  { icon: "🐘", name: "Gajah", color: "#E4F5DF" },
  { icon: "📚", name: "Buku", color: "#F1E8FF" },
];

export default function KenaliBuku() {
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="font-bold text-[#E9A638]">📚 Belajar mengenal gambar</p>
          <h1 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Ayo, Kenali Buku dan Gambar!
          </h1>
          <p className="mt-3 text-gray-500">Tekan gambar untuk mendengarkan namanya.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {pictures.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => speak(item.name)}
              style={{ backgroundColor: item.color }}
              className="rounded-3xl border-2 border-white p-5 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              aria-label={`Dengarkan nama ${item.name}`}
            >
              <span className="block text-6xl">{item.icon}</span>
              <span className="mt-3 block font-black text-[#354B68]">{item.name}</span>
              <span className="mt-2 block text-sm text-gray-600">🔊 Dengarkan</span>
            </button>
          ))}
        </div>

        {speechMessage && (
          <p role="status" aria-live="polite" className="mt-6 text-center text-sm font-semibold text-[#536B89]">
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
