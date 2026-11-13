
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
// BAGIAN 3: KOMPONEN UTAMA HALAMAN PETUALANGAN LITERASI
// ==================================================
export default function PetualanganLiterasi() {
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
          BAGIAN 6: DAFTAR KARTU MISI PEMBELAJARAN
          ================================================== */}
      <section
        id="misi"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16"
      >

        {/* BAGIAN 6A: JUDUL DAN DESKRIPSI MISI */}
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

        {/* BAGIAN 6B: KARTU MISI TERHUBUNG KE HALAMAN LAIN */}
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
          BAGIAN 7: FOOTER
          ================================================== */}
      <Footer />

    </main>
  );
}
