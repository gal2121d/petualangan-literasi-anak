
"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: DATA PILIHAN TOPIK
// ==================================================
const topics = [
  {
    icon: "🐱",
    title: "Kucing",
    desc: "Yuk, mengenal hewan kucing!",
    audio: "kucing.mp3.wav",
  },
  {
    icon: "🐦",
    title: "Burung",
    desc: "Yuk, mengenal hewan burung!",
    audio: "burung.mp3.wav",
  },
  {
    icon: "🐸",
    title: "Katak",
    desc: "Yuk, mengenal hewan katak!",
    audio: "kodok.mp3.wav",
  },
  {
    icon: "🐮",
    title: "Sapi",
    desc: "Yuk, mengenal hewan sapi!",
    audio: "sapi.mp3.wav",
  },
];

// ==================================================
// BAGIAN 3: KOMPONEN HALAMAN
// ==================================================
export default function TentukanTopik() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const penjelasanRef = useRef<HTMLAudioElement | null>(null);

  // ==================================================
  // BAGIAN 3A: FUNGSI MEMUTAR PENJELASAN OWI
  // ==================================================
  function playPenjelasan() {
    if (penjelasanRef.current) {
      penjelasanRef.current.pause();
      penjelasanRef.current.currentTime = 0;
    }

    const audio = new Audio("/audio/misi2.wav");
    penjelasanRef.current = audio;

    audio.play().catch(() => {
      alert("Audio belum bisa diputar. Periksa kembali file suara Owi.");
    });
  }

  // ==================================================
  // BAGIAN 3B: FUNGSI MEMILIH TOPIK DAN MEMUTAR AUDIO
  // ==================================================
  function pilihTopik(fileName: string) {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(`/audio/${fileName}`);
    audioRef.current = audio;

    audio.onended = () => {
      router.push("/cari-kata-kunci");
    };

    audio.play().catch(() => {
      alert("Audio belum bisa diputar. Periksa kembali file rekaman Owi.");
    });
  }

  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#34445B]">

      {/* BAGIAN 3A: NAVBAR */}
      <Navbar />

      {/* BAGIAN 3B: KONTEN UTAMA */}
      <section className="mx-auto max-w-6xl px-6 py-14">

        <span className="rounded-full bg-[#FFF0C9] px-4 py-2 text-sm font-bold text-[#B47B20]">
          MISI 2 💡
        </span>

        <h1 className="mt-6 text-4xl font-black text-[#354B68]">
          Tentukan Topik yang Kamu Sukai !
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Sebelum mencari buku, tentukan dahulu hal yang ingin kamu ketahui.
        </p>

        <p>
          Pilih salah satu gambar hewan yang paling menarik bagi kamu !
        </p>

        {/* TOMBOL AUDIO OWI */}
        <div className="mt-5">
          <button
            type="button"
            onClick={playPenjelasan}
            className="rounded-2xl bg-[#F5B942] px-6 py-3 font-extrabold text-[#60451C] shadow-sm transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Penjelasan Owi
          </button>
        </div>

        {/* BAGIAN 3C: KARTU PILIHAN TOPIK */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {topics.map((topic) => (
            <button
              key={topic.title}
              type="button"
              onClick={() => pilihTopik(topic.audio)}
              className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#F5B942] focus:outline-none focus:ring-2 focus:ring-[#F5B942]"
            >

              {/* GAMBAR HEWAN */}
              <div className="text-6xl">
                {topic.icon}
              </div>

              {/* JUDUL TOPIK */}
              <h2 className="mt-4 text-xl font-black text-[#354B68]">
                {topic.title}
              </h2>

              {/* PENJELASAN */}
              <p className="mt-2 text-sm leading-7 text-gray-600">
                {topic.desc}
              </p>

              {/* PETUNJUK KLIK */}
              <span className="mt-4 inline-block rounded-xl bg-[#FFF0C9] px-4 py-2 text-sm font-bold text-[#805B24]">
                🔊 Pilih Topik
              </span>

            </button>
          ))}

        </div>

        <p>ㅤ</p>

        <p>Dipilih dulu yaaa topiknya (gambar hewannya) 😁</p>

        {/* BAGIAN 3D: CONTOH MENENTUKAN TOPIK */}
        <div className="mt-9 rounded-3xl bg-[#FFF0C9] p-7">
          <h2 className="text-xl font-black text-[#354B68]">
            🌟 Contoh Menentukan Topik
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Misalnya, kamu ingin mengetahui tentang kucing.
            Maka, topik yang kamu pilih adalah <strong>Hewan</strong>,
            khususnya <strong>Kucing</strong>.
          </p>
        </div>

        {/* BAGIAN 3E: NAVIGASI */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/kenali-perpustakaan"
            className="rounded-xl border-2 border-[#354B68] px-6 py-3 font-bold text-[#354B68]"
          >
            ← Misi Sebelumnya
          </Link>
          
        </div>

      </section>

      {/* BAGIAN 3F: FOOTER */}
      <Footer />

    </main>
  );
}
