import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Swap from './components/Swap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <Swap />
      <Footer />
    </div>
  )
}

export default App
