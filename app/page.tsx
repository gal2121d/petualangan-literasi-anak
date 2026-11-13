
 // ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// ==================================================
// BAGIAN 2: DATA MISI PEMBELAJARAN
// ==================================================


// ==================================================
// BAGIAN 3: KOMPONEN UTAMA HALAMAN BERANDA
// ==================================================
export default function Home() {
  return (
    // ==================================================
    // BAGIAN 4: PEMBUNGKUS UTAMA WEBSITE
    // ==================================================
    <main className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#34445B]">

      {/* ==================================================
          BAGIAN 5: NAVBAR / MENU NAVIGASI ATAS
          ================================================== */}
      <Navbar />

      {/* ==================================================
          BAGIAN 6: HERO SECTION / TAMPILAN UTAMA BERANDA
          ================================================== */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* BAGIAN 6A: JUDUL DAN DESKRIPSI */}
        <div className="relative z-10">

          {/* LABEL SAMBUTAN */}
          <span className="inline-block rounded-full bg-[#FFF0C9] px-5 py-2 text-sm font-bold text-[#B47B20]">
            ✨ Petualangan dimulai di sini!
          </span>

          {/* JUDUL UTAMA */}
          <h2 className="mt-7 text-5xl font-black leading-tight text-[#354B68] md:text-6xl">
            Yuk, Jelajahi
            <span className="block text-[#F2A93B]">
              Dunia Buku!
            </span>
          </h2>

          {/* DESKRIPSI WEBSITE */}
          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Hai, teman-teman! Ikuti petualangan seru bersama Owi dan
            temukan cara mencari buku kesukaanmu di perpustakaan.
          </p>

          {/* BAGIAN 6B: TOMBOL MULAI PETUALANGAN */}
          <a
            href="#pilih-usia"
            className="mt-8 inline-block rounded-2xl bg-[#F5B942] px-8 py-4 font-extrabold text-[#60451C] shadow-lg shadow-yellow-200 transition hover:-translate-y-1 hover:bg-[#F8C95E]"
          >
            Mulai Petualangan →
          </a>
        </div>

        {/* BAGIAN 6C: ILUSTRASI MASKOT OWI */}
        <div className="flex justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-[#DDF3FF] md:h-96 md:w-96">

            {/* DEKORASI BINTANG DAN BUNGA */}
            <span className="absolute left-8 top-10 text-4xl">⭐</span>
            <span className="absolute right-10 top-16 text-3xl">✨</span>
            <span className="absolute bottom-12 left-10 text-3xl">🌼</span>

            {/* MASKOT DAN NAMA OWI */}
            <div className="text-center">
              <div className="text-[150px] leading-none drop-shadow-lg md:text-[180px]">
                🦉
              </div>
              <span className="mt-2 inline-block rounded-full bg-white px-7 py-2 font-black text-[#536B89] shadow">
                Halo, aku Owi!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          BAGIAN 7: PILIH JALUR PEMBELAJARAN BERDASARKAN USIA
          ================================================== */}
      <section
        id="pilih-usia"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 py-12"
      >

        {/* BAGIAN 7A: JUDUL DAN DESKRIPSI PILIHAN USIA */}
        <div className="mb-9 text-center">
          <p className="font-bold text-[#E9A638]">
            🌈 Satu Website, Dua Petualangan
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Siapa yang Mau Belajar Bersama Owi?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-500">
            Setiap anak punya cara belajar yang berbeda.
            Pilih jalur pembelajaran sesuai usiamu dan mulai petualangan!
          </p>
        </div>

        {/* BAGIAN 7B: DUA PILIHAN JALUR PEMBELAJARAN */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* PILIHAN 1: JALUR BALITA */}
          <a
            href="/dunia-kecil-owi"
            className="rounded-3xl border-2 border-white bg-[#FFE8DF] p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="text-7xl">🧸</div>

            <h3 className="mt-5 text-2xl font-black text-[#354B68]">
              Dunia Kecil Owi
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Petualangan untuk balita melalui gambar,
              suara, cerita, dan permainan sederhana.
            </p>

            <span className="mt-6 inline-block rounded-2xl bg-[#F5B942] px-6 py-3 font-bold text-[#60451C]">
              Untuk Balita →
            </span>
          </a>

          {/* PILIHAN 2: JALUR ANAK USIA 6–12 TAHUN */}
          <a
            href="#misi"
            className="rounded-3xl border-2 border-white bg-[#E2F3FF] p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="text-7xl">📚</div>

            <h3 className="mt-5 text-2xl font-black text-[#354B68]">
              Petualangan Literasi
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Belajar mengenal perpustakaan dan mencari informasi
              melalui enam misi pembelajaran.
            </p>

            <span className="mt-6 inline-block rounded-2xl bg-[#F5B942] px-6 py-3 font-bold text-[#60451C]">
              Usia 6–12 Tahun →
            </span>
          </a>

        </div>
      </section>

      {/* ==================================================
          BAGIAN 8: DAFTAR KARTU MISI PEMBELAJARAN
          ================================================== */}


      {/* ==================================================
          BAGIAN 9: FOOTER
          ================================================== */}
      <Footer />

    </main>
  );
}
