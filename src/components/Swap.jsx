import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownUp, ChevronDown, RefreshCw, Settings, ArrowDown } from 'lucide-react';

const tokens = [
  { symbol: 'SUI', name: 'Sui', color: 'from-cyan-400 to-sky-500' },
  { symbol: 'USDC', name: 'USD Coin', color: 'from-blue-400 to-indigo-500' },
  { symbol: 'WETH', name: 'Wrapped ETH', color: 'from-emerald-400 to-teal-500' },
  { symbol: 'CYPR', name: 'Cypher', color: 'from-fuchsia-500 to-violet-500' }
];

function TokenBadge({ symbol }) {
  const token = tokens.find(t => t.symbol === symbol) || tokens[0];
  return (
    <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${token.color} text-white grid place-items-center text-xs font-bold`}>{symbol}</div>
  );
}

function Row({ label, amount, setAmount, token, setToken }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{label}</span>
        <button className="inline-flex items-center gap-1 text-slate-300 hover:text-white">
          <Settings className="h-3.5 w-3.5" />
          Slippage 0.5%
        </button>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <TokenBadge symbol={token} />
        <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white hover:bg-white/10">
          {token}
          <ChevronDown className="h-4 w-4" />
        </button>
        <input
          className="ml-auto bg-transparent text-right text-2xl font-semibold text-white outline-none placeholder:text-slate-500"
          placeholder="0.0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mt-2 text-right text-xs text-slate-400">Balance: 0.00</div>
    </div>
  );
}

export default function Swap() {
  const [fromToken, setFromToken] = useState('SUI');
  const [toToken, setToToken] = useState('USDC');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const rate = useMemo(() => 0.99, []);

  const simulateQuote = () => {
    if (!fromAmount) return;
    setLoading(true);
    setTimeout(() => {
      const out = Number(fromAmount || 0) * rate;
      setToAmount(out ? out.toFixed(4) : '');
      setLoading(false);
    }, 600);
  };

  return (
    <section id="swap" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-md mx-auto w-full">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-slate-300 text-sm">Swap</div>
                <button className="text-slate-400 hover:text-white">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 space-y-3">
                <Row label="From" amount={fromAmount} setAmount={setFromAmount} token={fromToken} setToken={setFromToken} />
                <div className="grid place-items-center">
                  <button onClick={() => { setFromToken(toToken); setToToken(fromToken); setFromAmount(toAmount); setToAmount(fromAmount); }} className="-my-1 rounded-lg border border-white/10 bg-slate-900 p-1.5 text-slate-300 hover:bg-slate-800">
                    <ArrowDown className="h-4 w-4" />
                  </button>
                </div>
                <Row label="To" amount={toAmount} setAmount={setToAmount} token={toToken} setToken={setToToken} />
              </div>
              <div className="mt-4">
                <button onClick={simulateQuote} className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 text-white font-medium shadow-[0_0_28px_rgba(99,102,241,0.35)] hover:shadow-[0_0_38px_rgba(99,102,241,0.5)]">Get Quote</button>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-slate-400">This is a demo UI. Connect wallet and backend to enable real swaps on Sui.</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-slate-200 font-medium">Market overview</div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                {tokens.map((t) => (
                  <div key={t.symbol} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                    <div className="flex items-center gap-2">
                      <div className={`h-6 w-6 rounded-md bg-gradient-to-br ${t.color} text-white grid place-items-center text-[10px] font-bold`}>{t.symbol}</div>
                      <div className="text-slate-300">{t.name}</div>
                    </div>
                    <div className="mt-2 text-slate-400">Volume 24h: $12.4M</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
