"use client";

import { useState } from "react";
import NavbarBalita from "@/components/NavbarBalita";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

export default function PermainanOwi() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
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

  function chooseAnswer(answer: string) {
    setSelectedAnswer(answer);
    if (answer === "🐱") {
      speak("Hore! Benar sekali. Itu gambar kucing!");
    } else {
      speak("Belum tepat. Yuk, coba cari gambar kucing!");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <NavbarBalita />
      <section id="permainan-owi" className="bg-[#F1E8FF] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-bold text-[#9673C2]">🎮 Saatnya bermain!</p>
            <h1 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
              Bermain Bersama Owi
            </h1>
            <p className="mt-3 text-gray-600">
              Ayo, bantu Owi menemukan gambar yang benar!
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 text-center shadow-sm md:p-10">
            <h2 className="mt-4 text-xl font-black text-[#354B68]">
              Mana gambar kucing?
            </h2>
            <button
              type="button"
              onClick={() => speak("Mana gambar kucing? Ayo, pilih gambar kucing!")}
              className="mt-3 rounded-xl bg-[#FFF0C9] px-5 py-3 font-bold text-[#805B24]"
            >
              🔊 Dengarkan Pertanyaan
            </button>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: "🐶", name: "Anjing" },
                { icon: "🐱", name: "Kucing" },
                { icon: "🐰", name: "Kelinci" },
              ].map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => chooseAnswer(item.icon)}
                  className="rounded-3xl border-2 border-[#E8DDF7] bg-[#FBF8FF] p-4 transition hover:-translate-y-2 hover:shadow-md"
                  aria-label={`Pilih ${item.name}`}
                >
                  <span className="block text-5xl md:text-7xl">{item.icon}</span>
                  <span className="mt-3 block text-sm font-bold text-[#536B89]">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {selectedAnswer && (
              <div className="mt-6 rounded-2xl bg-[#E4F5DF] p-5">
                {selectedAnswer === "🐱" ? (
                  <p className="font-black text-[#477B43]">
                    🎉 Hore! Pintar sekali! Itu gambar kucing!
                  </p>
                ) : (
                  <p className="font-bold text-[#805B24]">
                    Yuk, coba lagi! Cari gambar kucing, ya!
                  </p>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setSelectedAnswer(null);
                speak("Yuk, bermain sekali lagi!");
              }}
              className="mt-6 rounded-xl border-2 border-[#BCA6DC] px-5 py-3 font-bold text-[#75599B] transition hover:bg-[#F1E8FF]"
            >
              ↻ Main Lagi
            </button>

            {speechMessage && (
              <p role="status" aria-live="polite" className="mt-5 text-sm font-semibold text-[#536B89]">
                {speechMessage}
              </p>
            )}
          </div>
        </div>
      </section>

      <NavigasiBalita
        previousHref="/dunia-kecil-owi/perpustakaan"
        nextHref="/dunia-kecil-owi/penutup"
      />
      <Footer />
    </main>
  );
}
