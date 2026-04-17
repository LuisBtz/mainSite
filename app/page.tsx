import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Camera } from "lucide-react"

export default function HomePage() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#f7f5f1] px-6 py-16 text-neutral-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.05),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.04),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(0,0,0,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.6)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <Link href="/" aria-label="Luis Benítez" className="mb-10 inline-flex">
          <Image
            src="/logo.svg"
            alt="Luis Benítez"
            width={56}
            height={60}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/60 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-neutral-600 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-900 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neutral-900" />
          </span>
          En construcción
        </span>

        <h1 className="cormorant-normal text-balance text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Algo nuevo está
          <span className="block italic text-neutral-700">tomando forma.</span>
        </h1>

        <p className="mt-6 max-w-md text-balance font-helvetica text-[15px] leading-relaxed text-neutral-600 sm:text-base">
          Este espacio está evolucionando. Pronto compartiré hacia dónde se dirige.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:mt-12">
          <p className="font-helvetica text-sm text-neutral-500">
            ¿Buscas fotografía de bodas?
          </p>
          <Link
            href="https://photography.luisbtz.com"
            className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3.5 font-helvetica text-sm font-medium text-white transition-all duration-300 hover:gap-4 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f1]"
          >
            <Camera className="h-4 w-4" strokeWidth={1.5} />
            <span>photography.luisbtz.com</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <footer className="relative z-10 mt-16 flex flex-col items-center gap-1 font-helvetica text-xs text-neutral-500 sm:mt-24">
        <span className="tracking-[0.18em]">LUIS BENÍTEZ</span>
        <span className="text-[11px] text-neutral-400">
          © {new Date().getFullYear()} · Monterrey, MX
        </span>
      </footer>
    </main>
  )
}
