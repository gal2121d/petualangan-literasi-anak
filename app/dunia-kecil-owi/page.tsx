
"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: DATA GAMBAR PEMBELAJARAN
// ==================================================
const pictures = [
  { icon: "🐱", name: "Kucing", color: "#E2F3FF" },
  { icon: "🐰", name: "Kelinci", color: "#FFF0CC" },
  { icon: "🍎", name: "Apel", color: "#FFE8DF" },
  { icon: "🍌", name: "Pisang", color: "#FFF5C9" },
  { icon: "🐘", name: "Gajah", color: "#E4F5DF" },
  { icon: "📚", name: "Buku", color: "#F1E8FF" },
];

// ==================================================
// BAGIAN 3: DATA KEGIATAN DI PERPUSTAKAAN
// ==================================================
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

// ==================================================
// BAGIAN 4: KOMPONEN UTAMA HALAMAN
// ==================================================
export default function DuniaKecilOwi() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [speechMessage, setSpeechMessage] = useState("");

  // ==================================================
  // BAGIAN 4A: FUNGSI SUARA
  // ==================================================
  function speak(text: string) {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      setSpeechMessage("Maaf, fitur suara belum tersedia di perangkat ini.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    window.speechSynthesis.speak(utterance);
    setSpeechMessage("Owi sedang berbicara. Yuk, dengarkan!");
  }

  // ==================================================
  // BAGIAN 4B: FUNGSI JAWABAN PERMAINAN
  // ==================================================
  function chooseAnswer(answer: string) {
    setSelectedAnswer(answer);

    if (answer === "🐱") {
      speak("Hore! Benar sekali. Itu gambar kucing!");
    } else {
      speak("Belum tepat. Yuk, coba cari gambar kucing!");
    }
  }

  // ==================================================
  // BAGIAN 5: TAMPILAN UTAMA
  // ==================================================
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">

      {/* ==================================================
          BAGIAN 5A: NAVBAR
          ================================================== */}
      <Navbar />

      {/* ==================================================
          BAGIAN 6: SAMBUTAN OWI
          ================================================== */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:py-20">

        <div>
          <span className="inline-block rounded-full bg-[#FFF0C9] px-5 py-2 text-sm font-bold text-[#B47B20]">
            🌈 Dunia Kecil Owi
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#354B68] md:text-6xl">
            Halo, Adik-adik!
            <span className="mt-2 block text-[#F2A93B]">
              Yuk, Bermain!
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">
            Hai! Aku Owi. Ayo kita mengenal buku, mendengarkan cerita,
            dan bermain bersama. Siap memulai petualangan?
          </p>

          <button
            type="button"
            onClick={() => speak("Halo, adik adik! Aku Owi. Yuk, kita bermain dan mengenal buku bersama!")}
            className="mt-6 rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow-lg transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            🔊 Dengarkan Sapaan Owi
          </button>

          <a
            href="#kenali-buku"
            className="ml-3 mt-6 inline-block rounded-2xl border-2 border-[#F5B942] px-7 py-4 font-bold text-[#60451C] transition hover:bg-[#FFF0C9]"
          >
            Mulai Yuk! →
          </a>
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-[#DDF3FF] md:h-96 md:w-96">
            <span className="absolute left-8 top-8 text-4xl">⭐</span>
            <span className="absolute right-8 top-12 text-3xl">✨</span>
            <span className="absolute bottom-10 left-8 text-3xl">🌼</span>

            <div className="text-center">
              <div className="text-[145px] leading-none drop-shadow-lg md:text-[180px]">
                🦉
              </div>
              <span className="mt-3 inline-block rounded-full bg-white px-7 py-2 font-black text-[#536B89] shadow">
                Halo, aku Owi!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          BAGIAN 7: KENALI BUKU DAN GAMBAR
          ================================================== */}
      <section
        id="kenali-buku"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16"
      >
        <div className="mb-10 text-center">
          <p className="font-bold text-[#E9A638]">
            📚 Belajar mengenal gambar
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Ayo, Kenali Buku dan Gambar!
          </h2>

          <p className="mt-3 text-gray-500">
            Tekan gambar untuk mendengarkan namanya.
          </p>
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
              <span className="mt-3 block font-black text-[#354B68]">
                {item.name}
              </span>
              <span className="mt-2 block text-sm text-gray-600">
                🔊 Dengarkan
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ==================================================
          BAGIAN 8: DENGARKAN CERITA
          ================================================== */}
      <section
        id="cerita"
        className="bg-[#EAF5FF] px-6 py-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">

          <div className="text-center">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-8xl">🦉📖</div>
              <div className="mt-4 text-5xl">🌳 🐰 🌼</div>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#6A91B8]">
              📖 Waktunya mendengarkan
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
              Dengarkan Cerita Owi
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Suatu hari, Owi menemukan sebuah buku cerita.
              Owi membuka bukunya dan melihat gambar kelinci.
              Wah, ternyata banyak cerita menarik di dalam buku!
            </p>

            <button
              type="button"
              onClick={() =>
                speak(
                  "Suatu hari, Owi menemukan sebuah buku cerita. Owi membuka bukunya dan melihat gambar kelinci. Wah, ternyata banyak cerita menarik di dalam buku!"
                )
              }
              className="mt-6 rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1"
            >
              🔊 Dengarkan Cerita
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          BAGIAN 9: MENGENAL PERPUSTAKAAN
          ================================================== */}
      <section
        id="perpustakaan"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16"
      >
        <div className="mb-10 text-center">
          <p className="font-bold text-[#E9A638]">
            🏫 Mengenal tempat membaca
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Yuk, Kenali Perpustakaan!
          </h2>

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

              <h3 className="mt-4 font-black text-[#354B68]">
                {activity.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {activity.desc}
              </p>

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
          <p className="font-bold text-[#805B24]">
            💛 Ingat, adik adik!
          </p>
          <p className="mt-2 text-sm leading-6 text-[#805B24]">
            Saat meminjam atau mengembalikan buku, mintalah bantuan
            orang tua atau pendamping dan petugas perpustakaan.
          </p>
        </div>
      </section>

      {/* ==================================================
          BAGIAN 10: PERMAINAN BERSAMA OWI
          ================================================== */}
      <section
        id="permainan-owi"
        className="bg-[#F1E8FF] px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="font-bold text-[#9673C2]">
              🎮 Saatnya bermain!
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
              Bermain Bersama Owi
            </h2>

            <p className="mt-3 text-gray-600">
              Ayo, bantu Owi menemukan gambar yang benar!
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 text-center shadow-sm md:p-10">
        

            <h3 className="mt-4 text-xl font-black text-[#354B68]">
              Mana gambar kucing?
            </h3>

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
                  <span className="block text-5xl md:text-7xl">
                    {item.icon}
                  </span>
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
          </div>
        </div>
      </section>

      {/* ==================================================
          BAGIAN 11: PENUTUP DAN APRESIASI
          ================================================== */}
      <section
        id="penutup"
        className="mx-auto max-w-5xl px-6 py-16 text-center"
      >
        <div className="rounded-[2rem] bg-[#DDF3FF] px-6 py-12">
          <div className="text-8xl">🦉🌟</div>

          <h2 className="mt-5 text-3xl font-black text-[#354B68]">
            Hebat Sekali, Adik-adik!
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-600">
            Terima kasih sudah bermain dan belajar bersama Owi.
            Yuk, terus kenali buku dan dengarkan cerita bersama
            orang tua atau pendamping!
          </p>

          <button
            type="button"
            onClick={() =>
              speak(
                "Terima kasih, adik adik! Kamu hebat sekali. Sampai jumpa lagi. Jangan lupa membaca buku bersama orang tua, ya!"
              )
            }
            className="mt-6 rounded-2xl bg-[#F5B942] px-7 py-4 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1"
          >
            🔊 Pesan dari Owi
          </button>
        </div>

        {/* PANDUAN ORANG TUA */}
        <div className="mt-10 rounded-3xl border-2 border-[#E2F3FF] bg-white p-6 text-left">
          <h3 className="text-xl font-black text-[#354B68]">
            👨‍👩‍👧 Panduan untuk Orang Tua dan Pendamping
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
            <li>Dampingi anak selama menggunakan halaman ini.</li>
            <li>Bantu anak mengenali gambar dan mendengarkan cerita.</li>
            <li>Ajak anak berbicara tentang buku yang dilihat.</li>
            <li>Sesuaikan waktu bermain dengan kenyamanan anak.</li>
            <li>Gunakan kegiatan ini sebagai pendamping membaca bersama.</li>
          </ul>
        </div>
      </section>

      {/* ==================================================
          BAGIAN 12: PESAN STATUS SUARA
          ================================================== */}
      {speechMessage && (
        <div
          role="status"
          aria-live="polite"
          className="mx-auto mb-6 max-w-5xl px-6 text-center text-sm font-semibold text-[#536B89]"
        >
          {speechMessage}
        </div>
      )}

      {/* ==================================================
          BAGIAN 13: FOOTER
          ================================================== */}
      <Footer />

    </main>
  );
}
