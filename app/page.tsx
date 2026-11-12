
 // ==================================================
// BAGIAN 1: IMPORT
// ==================================================
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KartuMisi from "@/components/KartuMisi";

// ==================================================
// BAGIAN 2: DATA MISI PEMBELAJARAN
// ==================================================
const missions = [
  {
    nomor: 1,
    icon: "🏫",
    title: "Kenali Perpustakaan",
    desc: "Yuk, kenali tempat penuh ilmu!",
    href: "/kenali-perpustakaan",
    color: "#E2F3FF",
  },
  {
    nomor: 2,
    icon: "💡",
    title: "Tentukan Topik",
    desc: "Pilih hal yang ingin kamu cari.",
    href: "/tentukan-topik",
    color: "#FFF0CC",
  },
  {
    nomor: 3,
    icon: "🔎",
    title: "Cari Kata Kunci",
    desc: "Temukan kata untuk pencarianmu.",
    href: "/cari-kata-kunci",
    color: "#E4F5DF",
  },
  {
    nomor: 4,
    icon: "📚",
    title: "Gunakan Katalog",
    desc: "Cari buku dengan lebih mudah.",
    href: "/gunakan-katalog",
    color: "#F1E8FF",
  },
  {
    nomor: 5,
    icon: "📖",
    title: "Temukan Buku",
    desc: "Temukan buku yang kamu cari.",
    href: "/temukan-buku",
    color: "#FFE8DF",
  },
  {
    nomor: 6,
    icon: "🎮",
    title: "Permainan dan Kuis",
    desc: "Uji pengetahuanmu sambil bermain.",
    href: "/permainan",
    color: "#E0F5F2",
  },
];

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
            href="#misi"
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
          BAGIAN 7: DAFTAR KARTU MISI PEMBELAJARAN
          ================================================== */}
      <section
        id="misi"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 pb-24"
      >

        {/* BAGIAN 7A: JUDUL DAN DESKRIPSI MISI */}
        <div className="mb-9 text-center">
          <p className="font-bold text-[#E9A638]">
            🌈 Ayo belajar sambil bermain
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#354B68] md:text-4xl">
            Pilih Misi Serumu!
          </h2>

          <p className="mt-3 text-gray-500">
            Ada banyak hal menarik yang bisa kamu pelajari.
          </p>
        </div>

        {/* BAGIAN 7B: KARTU MISI TERHUBUNG KE HALAMAN LAIN */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission) => (
            <KartuMisi
              key={mission.nomor}
              nomor={mission.nomor}
              icon={mission.icon}
              title={mission.title}
              desc={mission.desc}
              href={mission.href}
              color={mission.color}
            />
          ))}
        </div>
      </section>

      {/* ==================================================
          BAGIAN 8: FOOTER
          ================================================== */}
      <Footer />

    </main>
  );
}
