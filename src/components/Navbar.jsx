import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white/70 backdrop-blur shadow-md" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          
            {/* Logo + Judul */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className="font-semibold text-sm sm:text-base md:text-lg text-green-800 leading-snug">
                HUT Paroki
                <br className="sm:hidden" />
                St. Barnabas
              </span>
            </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-10 text-lg font-medium text-green-800">
            {menuItem("/", "Home")}
            {menuItem("/informasi", "Informasi")}
            {menuItem("/jadwal", "Jadwal")}
            {menuItem("/sponsor", "Sponsor")}
            {menuItem("/merchandise", "Merchandise")}
            {menuItem("/kepanitiaan", "Kepanitiaan")}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-green-800 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="flex flex-col gap-4 py-4 text-base font-medium text-green-800">
            {menuItem("/", "Home", () => setOpen(false))}
            {menuItem("/informasi", "Informasi", () => setOpen(false))}
            {menuItem("/jadwal", "Jadwal", () => setOpen(false))}
            {menuItem("/sponsor", "Sponsor", () => setOpen(false))}
            {menuItem("/logo", "Logo", () => setOpen(false))}
            {menuItem("/kepanitiaan", "Kepanitiaan", () => setOpen(false))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function menuItem(to, label, onClick) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        relative
        transition-colors duration-300
        hover:text-green-900
        after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:w-0 after:bg-green-800
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      {label}
    </Link>
  )
}
