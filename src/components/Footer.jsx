export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Cypher Labs. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-300 hover:text-white">Twitter</a>
          <a href="#" className="text-slate-300 hover:text-white">Discord</a>
          <a href="#" className="text-slate-300 hover:text-white">Docs</a>
        </div>
      </div>
    </footer>
  );
}
