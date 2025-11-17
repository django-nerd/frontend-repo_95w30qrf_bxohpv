import { Menu, Wallet, Settings, ShieldCheck, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 p-[1px] shadow-[0_0_24px_rgba(168,85,247,0.35)]">
            <div className="h-full w-full rounded-[10px] bg-slate-950 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight">Cypher SUI DEX</div>
            <div className="text-[11px] text-slate-400">Swap • Liquidity • Earn</div>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-slate-300 hover:text-white transition" href="#features">Features</a>
          <a className="text-slate-300 hover:text-white transition" href="#swap">Swap</a>
          <a className="text-slate-300 hover:text-white transition" href="#learn">Docs</a>
          <a className="text-slate-300 hover:text-white transition" href="#security">Security</a>
        </div>

        <div className="flex items-center gap-2">
          <button aria-label="Settings" className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300">
            <Settings className="h-5 w-5" />
          </button>
          <button aria-label="Toggle theme" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:shadow-[0_0_34px_rgba(99,102,241,0.45)] transition">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>
          <button className="md:hidden h-10 w-10 grid place-items-center rounded-xl bg-white/5 text-slate-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
