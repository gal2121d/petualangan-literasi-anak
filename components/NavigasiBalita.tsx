import Link from "next/link";

type NavigasiBalitaProps = {
  previousHref?: string;
  nextHref?: string;
  nextLabel?: string;
};

export default function NavigasiBalita({
  previousHref,
  nextHref,
  nextLabel = "Selanjutnya",
}: NavigasiBalitaProps) {
  return (
    <nav
      aria-label="Navigasi petualangan balita"
      className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8"
    >
      {previousHref ? (
        <Link
          href={previousHref}
          className="rounded-2xl border-2 border-[#F5B942] px-6 py-3 font-bold text-[#60451C] transition hover:bg-[#FFF0C9]"
        >
          ← Sebelumnya
        </Link>
      ) : (
        <span />
      )}

      {nextHref ? (
        <Link
          href={nextHref}
          className="rounded-2xl bg-[#F5B942] px-6 py-3 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1 hover:bg-[#F8C95E]"
        >
          {nextLabel} →
        </Link>
      ) : (
        <Link
          href="/dunia-kecil-owi"
          className="rounded-2xl bg-[#F5B942] px-6 py-3 font-extrabold text-[#60451C] shadow transition hover:-translate-y-1 hover:bg-[#F8C95E]"
        >
          ↻ Mulai Lagi
        </Link>
      )}
    </nav>
  );
}
