
"use client";

import { useState } from "react";
import NavbarBalita from "@/components/NavbarBalita";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

const libraryActivities = [
  {
    icon: "🏫",
    title: "Masuk Perpustakaan",
    desc: "Yuk masuk ke tempat yang penuh dengan buku!",
    audio: "masuk-perpus.wav",
    color: "#E2F3FF",
  },
  {
    icon: "📚",
    title: "Melihat Rak Buku",
    desc: "Di sini ada banyak buku dengan gambar menarik.",
    audio: "melihat-rak-buku.wav",
    color: "#F1E8FF",
  },
  {
    icon: "📖",
    title: "Memilih Buku",
    desc: "Pilih buku cerita yang ingin dibaca bersama.",
    audio: "memilih-buku.wav",
    color: "#FFF0CC",
  },
  {
    icon: "🤝",
    title: "Meminjam dan Mengembalikan",
    desc: "Minta bantuan orang tua dan petugas perpustakaan.",
    audio: "meminjam-mengembalikan.wav",
    color: "#E4F5DF",
  },
];

export default function MengenalPerpustakaan() {
  const [speechMessage, setSpeechMessage] = useState("");
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  function playAudio(fileName: string) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(`/audio/${fileName}`);

    setCurrentAudio(audio);

    audio.onended = () => {
      setSpeechMessage("");
      setCurrentAudio(null);
    };

    audio.play()
      .then(() => {
        setSpeechMessage("Owi sedang berbicara. Yuk, dengarkan!");
      })
      .catch(() => {
        setSpeechMessage(
          "Maaf, audio belum bisa diputar. Periksa kembali file suara Owi."
        );
        setCurrentAudio(null);
      });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <NavbarBalita />
      <section id="perpustakaan" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">

          {/* HIASAN KECIL OWI */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="text-xl">✨</span>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DDF3FF] shadow-sm">
              <span className="text-3xl">🦉</span>
            </div>
            <span className="text-xl">🌼</span>
          </div>

          <p className="font-bold text-[#E9A638]">
            🏫 Mengenal tempat membaca
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Yuk, Kenali Perpustakaan!
          </h1>

          <p className="mt-3 text-gray-500">
            Kenalkan namaku Owi, aku akan mengajakmu mengenal kegiatan di perpustakaan.
          </p>
          {/* TOMBOL AUDIO PETUNJUK OWI */}
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => playAudio("masuk-perpustakaan.wav")}
              className="rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow-lg transition hover:-translate-y-1 hover:bg-[#F8C95E]"
            >
              🔊 Dengarkan Petunjuk Owi
            </button>
          </div>
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
                onClick={() => playAudio(activity.audio)}
                className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-bold text-[#536B89] shadow-sm transition hover:-translate-y-1"
              >
                🔊 Dengarkan
              </button>
            </div>
          ))}
        </div>

        {/* PESAN PENGINGAT OWI */}
        <div className="mt-10 rounded-3xl border-2 border-[#F5B942] bg-[#FFF8E7] p-6 text-center">
          <h2 className="text-xl font-black text-[#354B68]">
            💛 Ingat, adik-adik!
          </h2>

          <p className="mt-3 text-gray-600">
            Saat meminjam atau mengembalikan buku, mintalah bantuan orang tua atau pendamping dan petugas perpustakaan.
          </p>

          {/* TOMBOL AUDIO OWI */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => playAudio("emm.wav")}
              className="rounded-2xl bg-[#F5B942] px-7 py-3 font-extrabold text-[#60451C] shadow-lg transition hover:-translate-y-1 hover:bg-[#F8C95E]"
            >
              🔊 Dengarkan Owi
            </button>
          </div>
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
