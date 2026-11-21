
"use client";

import { useState } from "react";
import NavbarBalita from "@/components/NavbarBalita";
import Footer from "@/components/Footer";
import NavigasiBalita from "@/components/NavigasiBalita";

export default function PenutupOwi() {
  const [speechMessage, setSpeechMessage] = useState("");

  function playAudio() {
    const audio = new Audio("/audio/hebat.wav");

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
      <NavbarBalita />

      
<section
  id="penutup"
  className="mx-auto max-w-4xl px-6 py-10 text-center"
>
  {/* KARTU UCAPAN OWI */}
  <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border-4 border-white bg-[#DDF3FF] px-5 py-8 shadow-md md:px-10">

    {/* HIASAN KECIL */}
    <span className="absolute left-5 top-5 text-2xl">✨</span>
    <span className="absolute right-6 top-6 text-2xl">🌼</span>
    <span className="absolute bottom-5 left-7 text-xl">⭐</span>
    <span className="absolute bottom-5 right-7 text-2xl">✨</span>

    <div className="relative">
      {/* OWI */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#FFF3CF] shadow-sm">
        <span className="text-5xl">🦉</span>
      </div>

      <div className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-extrabold text-[#E9A638] shadow-sm">
        🎉 Petualangan Selesai!
      </div>

      <h1 className="mt-4 text-2xl font-black text-[#354B68] md:text-3xl">
        Hebat Sekali, Adik-adik!
      </h1>

      <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-600">
        Terima kasih sudah bermain dan belajar bersama Owi. Yuk, terus kenali buku dan dengarkan cerita bersama orang tua atau pendamping!
      </p>

      {/* KARTU PESAN */}
      <div className="mx-auto mt-6 max-w-sm rounded-2xl border-2 border-white bg-white p-4 shadow-sm">
        <div className="text-2xl">💌</div>

        <p className="mt-2 font-extrabold text-[#354B68]">
          Pesan spesial dari Owi
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          Yuk, dengarkan pesan Owi sebelum kita berpisah!
        </p>

        <button
          type="button"
          onClick={playAudio}
          className="mt-4 w-full rounded-xl bg-[#F5B942] px-5 py-3 text-sm font-extrabold text-[#60451C] shadow-sm transition hover:-translate-y-1 hover:bg-[#F8C95E]"
        >
          🔊 Pesan dari Owi
        </button>

        {speechMessage && (
          <p
            role="status"
            aria-live="polite"
            className="mt-3 text-xs font-semibold text-[#536B89]"
          >
            {speechMessage}
          </p>
        )}
      </div>

      <p className="mt-5 text-sm font-bold text-[#6A91B8]">
        🌈 Sampai jumpa di petualangan berikutnya!
      </p>
    </div>
  </div>

  {/* PANDUAN ORANG TUA */}
  <div className="mx-auto mt-7 max-w-3xl rounded-3xl border-2 border-[#E2F3FF] bg-white p-5 text-left shadow-sm md:p-7">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0CC] text-2xl">
        👨‍👩‍👧
      </div>

      <h2 className="text-lg font-black text-[#354B68]">
        Panduan untuk Orang Tua dan Pendamping
      </h2>
    </div>

    <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
      <li className="flex gap-2">
        <span>💛</span>
        <span>Dampingi anak selama menggunakan halaman ini.</span>
      </li>
      <li className="flex gap-2">
        <span>📚</span>
        <span>Bantu anak mengenali gambar dan mendengarkan cerita.</span>
      </li>
      <li className="flex gap-2">
        <span>💬</span>
        <span>Ajak anak berbicara tentang buku yang dilihat.</span>
      </li>
      <li className="flex gap-2">
        <span>🌼</span>
        <span>Sesuaikan waktu bermain dengan kenyamanan anak.</span>
      </li>
      <li className="flex gap-2">
        <span>❤️</span>
        <span>Gunakan kegiatan ini sebagai pendamping membaca bersama.</span>
      </li>
    </ul>
  </div>
</section>


      <NavigasiBalita previousHref="/dunia-kecil-owi/permainan" />
      <Footer />
    </main>
  );
}
