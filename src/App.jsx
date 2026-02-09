import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Informasi from "./pages/Informasi"
import Jadwal from "./pages/Jadwal"
import Sponsor from "./pages/Sponsor"
import Logo from "./pages/Logo"
import Kepanitiaan from "./pages/Kepanitiaan"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/kepanitiaan" element={<Kepanitiaan />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
