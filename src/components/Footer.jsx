import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Tentang */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            HUT Paroki Pamulang
          </h3>

          <p className="text-sm text-white/80 leading-relaxed">
            Gereja St. Barnabas Pamulang
            <br />
            Bersatu dalam Iman dan Pelayanan
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold mb-3">
            Menu
          </h4>

          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/galeri"
                className="hover:text-yellow-300 transition"
              >
                Galeri
              </Link>
            </li>

            <li>
              <Link
                to="/informasi"
                className="hover:text-yellow-300 transition"
              >
                Informasi
              </Link>
            </li>

            <li>
              <Link
                to="/jadwal"
                className="hover:text-yellow-300 transition"
              >
                Jadwal
              </Link>
            </li>

            <li>
              <Link
                to="/kepanitiaan"
                className="hover:text-yellow-300 transition"
              >
                Kepanitiaan
              </Link>
            </li>

            <li>
              <Link
                to="/merchandise"
                className="hover:text-yellow-300 transition"
              >
                Merchandise
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold mb-3">
            Kontak
          </h4>

          <div className="text-sm text-white/80 leading-relaxed space-y-4">
            <p>
              Paroki St. Barnabas Pamulang
              <br />
              Tangerang Selatan
            </p>

            <div>
              <p className="font-medium text-white">
                Lucya Kasih Cinsedi
              </p>

              <a
                href="https://wa.me/6281298117711"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                0812-9811-7711
              </a>
            </div>

            <div>
              <p className="font-medium text-white">
                Yudho Trianto
              </p>

              <a
                href="https://wa.me/628161401254"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                0816-1401-254
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-white/60 py-4 border-t border-white/20">
        © 2026 Panitia HUT Paroki St. Barnabas Pamulang
      </div>
    </footer>
  )
}