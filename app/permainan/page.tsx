"use client";

// ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==================================================
// BAGIAN 2: DATA PERTANYAAN KUIS
// Ubah pertanyaan, pilihan, jawaban, dan penjelasan di sini
// answer dimulai dari angka 0
// ==================================================
const questions = [
  {
    question: "Apa fungsi utama perpustakaan?",
    options: [
      "Tempat bermain bola",
      "Tempat membaca dan mencari informasi",
      "Tempat membeli makanan",
      "Tempat tidur",
    ],
    answer: 1,
    explanation:
      "Perpustakaan merupakan tempat untuk membaca, belajar, dan mencari informasi.",
  },
  {
    question: "Apa yang harus ditentukan sebelum mencari buku?",
    options: [
      "Warna sepatu",
      "Nama teman",
      "Topik yang ingin dicari",
      "Jam bermain",
    ],
    answer: 2,
    explanation:
      "Menentukan topik membantu kita mengetahui informasi apa yang ingin dicari.",
  },
  {
    question: "Apa yang dimaksud dengan kata kunci?",
    options: [
      "Kata penting untuk pencarian informasi",
      "Nama petugas perpustakaan",
      "Nomor meja",
      "Nama ruangan",
    ],
    answer: 0,
    explanation:
      "Kata kunci merupakan kata penting yang mewakili informasi yang ingin ditemukan.",
  },
  {
    question: "Apa kegunaan katalog perpustakaan?",
    options: [
      "Menghitung jumlah pengunjung",
      "Mencari informasi koleksi buku",
      "Menghias ruangan",
      "Mencetak gambar",
    ],
    answer: 1,
    explanation:
      "Katalog membantu kita mencari informasi tentang koleksi buku perpustakaan.",
  },
  {
    question: "Apa yang harus dilakukan setelah menemukan buku?",
    options: [
      "Merusak buku",
      "Meninggalkan buku sembarangan",
      "Menjaga dan membaca buku dengan baik",
      "Mencoret halaman buku",
    ],
    answer: 2,
    explanation:
      "Buku perpustakaan harus dijaga agar tetap bisa digunakan oleh orang lain.",
  },
];

// ==================================================
// BAGIAN 3: KOMPONEN UTAMA KUIS
// ==================================================
export default function Permainan() {

  // BAGIAN 3A: PENGATURAN STATUS KUIS
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // ==================================================
  // BAGIAN 3B: FUNGSI MEMILIH JAWABAN
  // ==================================================
  function chooseAnswer(index: number) {
    // Mencegah anak memilih jawaban lebih dari satu kali
    if (selected !== null) return;

    setSelected(index);

    // Menambah skor jika jawaban benar
    if (index === questions[current].answer) {
      setScore((previous) => previous + 1);
    }
  }

  // ==================================================
  // BAGIAN 3C: FUNGSI MENUJU PERTANYAAN SELANJUTNYA
  // ==================================================
  function nextQuestion() {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  // ==================================================
  // BAGIAN 3D: FUNGSI MENGULANG KUIS
  // ==================================================
  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  // BAGIAN 3E: MENGAMBIL PERTANYAAN SAAT INI
  const question = questions[current];

  // ==================================================
  // BAGIAN 4: TAMPILAN KUIS
  // ==================================================
  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#34445B]">

      {/* BAGIAN 4A: NAVBAR */}
      <Navbar />

      {/* BAGIAN 4B: KONTEN KUIS */}
      <section className="mx-auto max-w-4xl px-6 py-14">

        {/* JUDUL KUIS */}
        <div className="text-center">
          <span className="rounded-full bg-[#E2F2FF] px-4 py-2 text-sm font-bold text-blue-700">
            MISI 6 🎮
          </span>

          <h1 className="mt-6 text-4xl font-black text-[#354B68]">
            Kuis Seru Bersama Owi!
          </h1>

          <p className="mt-4 text-gray-600">
            Yuk, uji pengetahuanmu tentang perpustakaan!
          </p>
        </div>

        {/* BAGIAN 4C: KARTU KUIS */}
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-lg sm:p-9">

          {/* TAMPILAN SAAT KUIS BELUM SELESAI */}
          {!finished ? (
            <>

              {/* NOMOR PERTANYAAN DAN SKOR */}
              <div className="flex items-center justify-between gap-3">
                <p className="font-bold text-[#526A87]">
                  Pertanyaan {current + 1} dari {questions.length}
                </p>

                <p className="font-bold text-[#E9A638]">
                  ⭐ Skor: {score}
                </p>
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#F5B942] transition-all"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* MASKOT DAN PERTANYAAN */}
              <div className="mt-8">
                <div className="text-5xl">🦉</div>

                <h2 className="mt-5 text-2xl font-black text-[#354B68]">
                  {question.question}
                </h2>

                {/* PILIHAN JAWABAN */}
                <div className="mt-6 grid gap-3">
                  {question.options.map((option, index) => {

                    // BAGIAN: MENENTUKAN WARNA JAWABAN
                    const isCorrect = index === question.answer;
                    const isSelected = selected === index;

                    let buttonStyle =
                      "border-gray-200 bg-white hover:border-[#F5B942]";

                    if (selected !== null && isCorrect) {
                      buttonStyle =
                        "border-green-500 bg-green-50 text-green-800";
                    } else if (isSelected && !isCorrect) {
                      buttonStyle =
                        "border-red-400 bg-red-50 text-red-800";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => chooseAnswer(index)}
                        disabled={selected !== null}
                        className={`rounded-2xl border-2 p-4 text-left font-semibold transition ${buttonStyle}`}
                      >
                        <span className="mr-3 font-black">
                          {String.fromCharCode(65 + index)}.
                        </span>

                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* BAGIAN: PENJELASAN JAWABAN */}
                {selected !== null && (
                  <div className="mt-6 rounded-2xl bg-[#FFF0C9] p-5">

                    <p className="font-black text-[#354B68]">
                      {selected === question.answer
                        ? "🎉 Hebat! Jawabanmu benar!"
                        : "🌱 Belum tepat, yuk belajar lagi!"}
                    </p>

                    <p className="mt-2 leading-7 text-gray-700">
                      {question.explanation}
                    </p>

                    {/* TOMBOL PERTANYAAN SELANJUTNYA */}
                    <button
                      onClick={nextQuestion}
                      className="mt-5 rounded-xl bg-[#354B68] px-6 py-3 font-bold text-white hover:bg-[#526A87]"
                    >
                      {current === questions.length - 1
                        ? "Lihat Hasil"
                        : "Pertanyaan Selanjutnya →"}
                    </button>

                  </div>
                )}

              </div>
            </>
          ) : (

            /* ==================================================
               BAGIAN 4D: TAMPILAN HASIL KUIS
               ================================================== */
            <div className="py-8 text-center">

              <div className="text-7xl">🏆</div>

              <h2 className="mt-5 text-3xl font-black text-[#354B68]">
                Petualangan Selesai!
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                Kamu mendapatkan:
              </p>

              {/* NILAI AKHIR */}
              <p className="mt-2 text-5xl font-black text-[#E9A638]">
                {score}/{questions.length}
              </p>

              {/* PESAN SESUAI NILAI */}
              <p className="mt-4 leading-7 text-gray-600">
                {score === 5
                  ? "Luar biasa! Kamu sudah memahami materi dengan sangat baik!"
                  : score >= 3
                    ? "Bagus! Kamu sudah memahami sebagian besar materi. Terus belajar, ya!"
                    : "Tetap semangat! Kamu bisa mempelajari materi kembali dan mencoba lagi."}
              </p>

              {/* TOMBOL ULANGI KUIS */}
              <button
                onClick={restartQuiz}
                className="mt-7 rounded-xl bg-[#F5B942] px-7 py-3 font-bold text-[#60451C] hover:bg-[#F8C95E]"
              >
                🔄 Ulangi Kuis
              </button>

            </div>
          )}

        </div>

        {/* BAGIAN 4E: KEMBALI KE BERANDA */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="font-bold text-[#526A87] hover:text-[#E9A638]"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

      </section>

      {/* BAGIAN 4F: FOOTER */}
      <Footer />

    </main>
  );
}