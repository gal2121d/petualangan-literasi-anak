"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

export default function PenutupOwi() {
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
      <section id="penutup" className="mx-auto max-w-5xl px-6 py-16 text-center">
        <div className="rounded-[2rem] bg-[#DDF3FF] px-6 py-12">
          <div className="text-8xl">🦉🌟</div>
          <h1 className="mt-5 text-3xl font-black text-[#354B68]">
            Hebat Sekali, Adik-adik!
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-600">
            Terima kasih sudah bermain dan belajar bersama Owi. Yuk, terus kenali buku dan dengarkan cerita bersama orang tua atau pendamping!
          </p>
          <button
            type="button"
            onClick={() =>
              speak("Terima kasih, adik-adik! Kamu hebat sekali. Sampai jumpa lagi. Jangan lupa membaca buku bersama orang tua, ya!")
            }
            className="mt-6 rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1"
          >
            🔊 Pesan dari Owi
          </button>
          {speechMessage && (
            <p role="status" aria-live="polite" className="mt-4 text-sm font-semibold text-[#536B89]">
              {speechMessage}
            </p>
          )}
        </div>

        <div className="mt-10 rounded-3xl border-2 border-[#E2F3FF] bg-white p-6 text-left">
          <h2 className="text-xl font-black text-[#354B68]">
            👨‍👩‍👧 Panduan untuk Orang Tua dan Pendamping
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
            <li>Dampingi anak selama menggunakan halaman ini.</li>
            <li>Bantu anak mengenali gambar dan mendengarkan cerita.</li>
            <li>Ajak anak berbicara tentang buku yang dilihat.</li>
            <li>Sesuaikan waktu bermain dengan kenyamanan anak.</li>
            <li>Gunakan kegiatan ini sebagai pendamping membaca bersama.</li>
          </ul>
        </div>
      </section>

      <NavigasiBalita previousHref="/dunia-kecil-owi/permainan" />
      <Footer />
    </main>
  );
}
