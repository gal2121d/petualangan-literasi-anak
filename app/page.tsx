
"use client";

import { useState } from "react";

const missions = [
  { icon: "🏫", title: "Kenali Perpustakaan", desc: "Yuk, kenali tempat penuh ilmu!", color: "#DDF3FF" },
  { icon: "💡", title: "Tentukan Topik", desc: "Pilih hal yang ingin kamu cari.", color: "#FFF0C9" },
  { icon: "🔎", title: "Cari Kata Kunci", desc: "Temukan kata untuk pencarianmu.", color: "#E4F8E9" },
  { icon: "📚", title: "Gunakan Katalog", desc: "Cari buku dengan lebih mudah.", color: "#F4E7FF" },
];

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🦉</span>
          <div>
            <h1 className="text-lg font-black text-[#354B68]">Petualangan Literasi</h1>
            <p className="text-xs font-medium text-gray-500">Dunia Seru Penuh Cerita</p>
          </div>
        </div>

        <div className="hidden gap-8 font-semibold md:flex">
          <a href="#" className="text-[#F2A93B]">Beranda</a>
          <a href="#misi" className="hover:text-[#F2A93B]">Kenali Perpustakaan</a>
          <a href="#misi" className="hover:text-[#F2A93B]">Cari Buku</a>
          <a href="#misi" className="hover:text-[#F2A93B]">Permainan</a>
        </div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <span className="inline-block rounded-full bg-[#FFF0C9] px-5 py-2 text-sm font-bold text-[#B47B20]">
            ✨ Petualangan dimulai di sini!
          </span>

          <h2 className="mt-7 text-5xl font-black leading-tight text-[#354B68] md:text-6xl">
            Yuk, Jelajahi
            <span className="block text-[#F2A93B]">Dunia Buku!</span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Hai, teman-teman! Ikuti petualangan seru bersama Owi dan
            temukan cara mencari buku kesukaanmu di perpustakaan.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-8 rounded-2xl bg-[#F5B942] px-8 py-4 font-extrabold text-[#60451C] shadow-lg shadow-yellow-200 transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            {started ? "🎉 Petualangan Dimulai!" : "Mulai Petualangan →"}
          </button>

          {started && (
            <p className="mt-4 font-semibold text-green-700">
              Hore! Pilih salah satu misi di bawah, ya!
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-[#DDF3FF] md:h-96 md:w-96">
            <span className="absolute left-8 top-10 text-4xl">⭐</span>
            <span className="absolute right-10 top-16 text-3xl">✨</span>
            <span className="absolute bottom-12 left-10 text-3xl">🌼</span>
            <div className="text-center">
              <div className="text-[150px] leading-none drop-shadow-lg md:text-[180px]">🦉</div>
              <span className="mt-2 inline-block rounded-full bg-white px-7 py-2 font-black text-[#536B89] shadow">
                Halo, aku Owi!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="misi" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-9 text-center">
          <p className="font-bold text-[#E9A638]">🌈 Ayo belajar sambil bermain</p>
          <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Pilih Misi Serumu!
          </h2>
          <p className="mt-3 text-gray-500">
            Ada banyak hal menarik yang bisa kamu pelajari.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <button
              key={mission.title}
              onClick={() => alert(`Kamu memilih misi: ${mission.title}!`)}
              className="rounded-3xl border border-white p-6 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: mission.color }}
            >
              <div className="mb-5 text-5xl">{mission.icon}</div>
              <p className="mb-2 text-sm font-bold text-gray-500">
                MISI {index + 1}
              </p>
              <h3 className="text-lg font-black text-[#354B68]">
                {mission.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {mission.desc}
              </p>
              <p className="mt-5 font-bold text-[#526A87]">Ayo coba →</p>
            </button>
          ))}
        </div>
      </section>

      <footer className="bg-[#354B68] px-6 py-7 text-center text-sm text-white">
        🦉 Petualangan Literasi Anak · Belajar, Membaca, dan Bermain!
      </footer>
    </main>
  );
}
