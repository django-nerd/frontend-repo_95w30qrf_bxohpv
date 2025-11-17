import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-slate-950" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live on Sui testnet • Smart order routing • Gas efficient
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Trade crypto with a futuristic edge
          </h1>
          <p className="mt-4 text-slate-300 text-lg md:text-xl">
            A cyberpunk DEX experience powered by Sui. Swap tokens, add liquidity, and earn yield with next‑gen performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="pointer-events-auto rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.55)] transition">
              Launch App
            </button>
            <button className="pointer-events-auto rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition">
              Read Docs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
