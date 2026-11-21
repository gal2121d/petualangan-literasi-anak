
"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import NavbarBalita from "@/components/NavbarBalita";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: DATA URUTAN KEGIATAN PETUALANGAN BALITA
// ==================================================
const activities = [
  {
    nomor: 1,
    icon: "📚",
    title: "Kenali Buku dan Gambar",
    desc: "Yuk, melihat gambar lucu dan mendengarkan namanya!",
    color: "#E2F3FF",
    audio: "langkah-1.wav",
  },
  {
    nomor: 2,
    icon: "📖",
    title: "Dengarkan Cerita Owi",
    desc: "Yuk, dengarkan cerita menarik yang ingin Owi sampaikan!",
    color: "#FFF0CC",
    audio: "langkah-2.wav",
  },
  {
    nomor: 3,
    icon: "🏫",
    title: "Mengenal Perpustakaan",
    desc: "Yuk, mengenal tempat yang penuh dengan buku!",
    color: "#E4F5DF",
    audio: "langkah-3.wav",
  },
  {
    nomor: 4,
    icon: "🎮",
    title: "Bermain Bersama Owi",
    desc: "Yuk, bermain dan temukan gambar yang benar!",
    color: "#F1E8FF",
    audio: "langkah-4.wav",
  },
];

// ==================================================
// BAGIAN 3: KOMPONEN UTAMA HALAMAN DUNIA KECIL OWI
// ==================================================
export default function DuniaKecilOwi() {

  // TAMBAHAN: FUNGSI UNTUK MEMUTAR AUDIO
  const playAudio = (fileName: string) => {
    const audio = new Audio(`/audio/${fileName}`);
    audio.play().catch(() => {
      alert("Audio belum bisa diputar. Periksa kembali file rekaman Owi.");
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">

      {/* ==================================================
          BAGIAN 4: NAVBAR
      ================================================== */}
      <NavbarBalita />

      {/* ==================================================
          BAGIAN 5: HERO SECTION / SAMBUTAN OWI
      ================================================== */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:py-20">

        {/* BAGIAN 5A: JUDUL DAN SAMBUTAN */}
        <div className="relative z-10 text-center md:text-left">

          <span className="inline-block rounded-full bg-[#FFF0C9] px-5 py-2 text-sm font-bold text-[#B47B20]">
            🌈 Selamat Datang di Dunia Kecil Owi!
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#354B68] md:text-6xl">
            Halo, Adik-adik!
            <span className="mt-2 block text-[#F2A93B]">
              Yuk, Bermain!
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-gray-600 md:mx-0">
            Hai, adik-adik! Kenalkan aku  Owi. Yuk, kita mengenal perpustakaan dengan bercerita dan bermain!
          </p>

          {/* BAGIAN 5B: TOMBOL AUDIO DAN MULAI */}
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">

            <button
              type="button"
              onClick={() => {
                const audio = new Audio("/audio/sapaan-owi.mp3.webm");
                audio.play().catch(() => {
                  alert("Audio belum bisa diputar. Periksa kembali file rekaman Owi.");
                });
              }}
              className="rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow-lg transition hover:-translate-y-1 hover:bg-[#F8C95E]"
            >
              🔊 Dengarkan Sapaan Owi
            </button>

            <a
              href="#mulai-langkah"
              className="rounded-2xl border-2 border-[#F5B942] bg-white px-7 py-4 font-extrabold text-[#60451C] transition hover:bg-[#FFF0C9]"
            >
              🚀 Mulai Petualangan!
            </a>

          </div>

          {/* HIASAN */}
          <div className="mt-8 flex justify-center gap-5 text-3xl md:justify-start">
            <span>🌼</span>
            <span>⭐</span>
            <span>🧸</span>
            <span>🌈</span>
            <span>💛</span>
          </div>
        </div>

        {/* BAGIAN 5C: MASKOT OWI */}
        <div className="flex justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-[#DDF3FF] shadow-sm md:h-96 md:w-96">

            <span className="absolute left-8 top-8 text-4xl">⭐</span>
            <span className="absolute right-8 top-12 text-3xl">✨</span>
            <span className="absolute bottom-10 left-8 text-3xl">🌼</span>
            <span className="absolute bottom-12 right-8 text-3xl">💛</span>

            <div className="text-center">
              <div className="text-[145px] leading-none drop-shadow-lg md:text-[180px]">
                🦉
              </div>

              <span className="mt-3 inline-block rounded-full bg-white px-7 py-3 font-black text-[#536B89] shadow">
                Ayo bermain denganku!
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          BAGIAN 6: URUTAN PETUALANGAN OWI
      ================================================== */}
      <section
        id="petualangan"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 pb-8 pt-2"
      >

        {/* BAGIAN 6A: JUDUL KEGIATAN */}
        <div className="mb-10 text-center">

          <p className="font-bold text-[#E9A638]">
            🎈 Petualangan kecil bersama Owi
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Yuk, Ikuti Petualangan Owi!
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-500">
            Kita akan melakukan empat kegiatan seru secara berurutan.
            Ikuti langkahnya sampai selesai, ya!
          </p>

          {/* TAMBAHAN: AUDIO PETUALANGAN OWI */}
          <button
            type="button"
            onClick={() => playAudio("4.wav")}
            className="mt-5 rounded-2xl bg-[#F5B942] px-6 py-3 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Petualangan Owi
          </button>

        </div>

        {/* BAGIAN 6B: KARTU URUTAN KEGIATAN */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {activities.map((activity) => (
            <div
              key={activity.nomor}
              style={{ backgroundColor: activity.color }}
              className="relative rounded-3xl border-2 border-white p-6 text-center shadow-sm"
            >

              {/* NOMOR URUTAN */}
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-black text-[#536B89] shadow-sm">
                {activity.nomor}
              </div>

              {/* GAMBAR KEGIATAN */}
              <div className="mt-5 text-7xl">
                {activity.icon}
              </div>

              {/* JUDUL KEGIATAN */}
              <h3 className="mt-5 text-lg font-black text-[#354B68]">
                {activity.title}
              </h3>

              {/* PENJELASAN */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {activity.desc}
              </p>

              {/* PENANDA URUTAN */}
              <p className="mt-5 font-bold text-[#536B89]">
                Langkah {activity.nomor}
              </p>

              {/* TAMBAHAN: AUDIO SETIAP KARTU */}
              <button
                type="button"
                onClick={() => playAudio(activity.audio)}
                className="mt-4 rounded-xl bg-white px-5 py-3 font-bold text-[#536B89] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                🔊 Dengarkan
              </button>

            </div>
          ))}

        </div>
      </section>

     {/* ==================================================
    BAGIAN 7: AJAKAN DARI OWI
================================================== */}
    <section
      id="mulai-langkah"
      className="mx-auto max-w-5xl scroll-mt-8 px-6 pb-16"
    >
      <div className="rounded-[2rem] bg-[#FFF0C9] px-6 py-10 text-center">

        <div className="text-6xl">🦉🌟</div>

        <h2 className="mt-4 text-2xl font-black text-[#354B68]">
          Sudah Siap Bermain?
        </h2>

        <p className="mt-3 leading-7 text-[#805B24]">
          Tekan tombol di bawah untuk memulai kegiatan pertama!
        </p>

        {/* TAMBAHAN: AUDIO AJAKAN OWI DAN TOMBOL MULAI */}
        <div className="mt-5 flex flex-col items-center gap-4">

          <button
            type="button"
            onClick={() => playAudio("ajakan-owi.wav")}
            className="rounded-2xl border-2 border-[#F5B942] bg-white px-6 py-3 font-extrabold text-[#60451C] shadow-sm transition hover:-translate-y-1"
          >
            🔊 Dengarkan Ajakan Owi
          </button>

          <a
            href="/dunia-kecil-owi/kenali-buku"
            className="inline-block rounded-2xl bg-[#F5B942] px-8 py-4 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            📚 Mulai dari Langkah 1 →
          </a>

        </div>

      </div>
    </section>
      {/* TOMBOL KEMBALI KE BERANDA UTAMA */}
      <div className="mx-auto max-w-5xl px-6 pb-10 text-center">
        <a
          href="/"
          className="inline-block rounded-2xl border-2 border-[#F5B942] bg-white px-7 py-3 font-extrabold text-[#60451C] shadow-sm transition hover:-translate-y-1 hover:bg-[#FFF0C9]"
        >
          🏠 Kembali ke Beranda Utama
        </a>
      </div>
      {/* ==================================================
          BAGIAN 8: FOOTER
      ================================================== */}
      <Footer />

    </main>
  );
}
