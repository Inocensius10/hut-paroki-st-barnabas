import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Informasi from "./pages/Informasi"
import Jadwal from "./pages/Jadwal"
import Sponsor from "./pages/Sponsor"
import Merchandise from "./pages/Merchandise"
import Kepanitiaan from "./pages/Kepanitiaan"

export default function App() {
  return (
    <BrowserRouter>

      {/* INI KUNCINYA */}
      <ScrollToTop />

      <Navbar />

      <main className="pt-24 min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/kepanitiaan" element={<Kepanitiaan />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
