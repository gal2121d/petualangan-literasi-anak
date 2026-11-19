"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

const libraryActivities = [
  {
    icon: "🏫",
    title: "Masuk Perpustakaan",
    desc: "Ayo masuk ke tempat yang penuh dengan buku!",
    color: "#E2F3FF",
  },
  {
    icon: "📚",
    title: "Melihat Rak Buku",
    desc: "Di sini ada banyak buku dengan gambar menarik.",
    color: "#F1E8FF",
  },
  {
    icon: "📖",
    title: "Memilih Buku",
    desc: "Pilih buku cerita yang ingin dibaca bersama.",
    color: "#FFF0CC",
  },
  {
    icon: "🤝",
    title: "Meminjam dan Mengembalikan",
    desc: "Minta bantuan orang tua dan petugas perpustakaan.",
    color: "#E4F5DF",
  },
];

export default function MengenalPerpustakaan() {
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
      <section id="perpustakaan" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="font-bold text-[#E9A638]">🏫 Mengenal tempat membaca</p>
          <h1 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Yuk, Kenali Perpustakaan!
          </h1>
          <p className="mt-3 text-gray-500">
            Owi akan mengajakmu mengenal kegiatan di perpustakaan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {libraryActivities.map((activity) => (
            <div
              key={activity.title}
              style={{ backgroundColor: activity.color }}
              className="rounded-3xl border-2 border-white p-6 text-center shadow-sm"
            >
              <div className="text-6xl">{activity.icon}</div>
              <h2 className="mt-4 font-black text-[#354B68]">{activity.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{activity.desc}</p>
              <button
                type="button"
                onClick={() => speak(activity.desc)}
                className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-bold text-[#536B89] shadow-sm transition hover:-translate-y-1"
              >
                🔊 Dengarkan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-[#FFF0C9] p-6 text-center">
          <p className="font-bold text-[#805B24]">💛 Ingat, adik-adik!</p>
          <p className="mt-2 text-sm leading-6 text-[#805B24]">
            Saat meminjam atau mengembalikan buku, mintalah bantuan orang tua atau pendamping dan petugas perpustakaan.
          </p>
        </div>

        {speechMessage && (
          <p role="status" aria-live="polite" className="mt-6 text-center text-sm font-semibold text-[#536B89]">
            {speechMessage}
          </p>
        )}
      </section>

      <NavigasiBalita
        previousHref="/dunia-kecil-owi/cerita"
        nextHref="/dunia-kecil-owi/permainan"
      />
      <Footer />
    </main>
  );
}
