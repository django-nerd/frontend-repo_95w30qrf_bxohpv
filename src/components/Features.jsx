import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Network, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Audited & Secure',
    desc: 'Battle-tested smart contracts with continuous monitoring and timelock governance.'
  },
  {
    icon: Zap,
    title: 'Lightning Swaps',
    desc: 'Smart order routing on Sui for blazing fast settlement and minimal slippage.'
  },
  {
    icon: Network,
    title: 'Liquidity Programs',
    desc: 'Provision liquidity, earn fees and CYPR rewards through gamified quests.'
  },
  {
    icon: Sparkles,
    title: 'Beautiful UX',
    desc: 'Smooth animations, keyboard shortcuts and a sleek cyber aesthetic.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white">Why trade on Cypher?</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center shadow-[0_0_18px_rgba(99,102,241,0.35)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
