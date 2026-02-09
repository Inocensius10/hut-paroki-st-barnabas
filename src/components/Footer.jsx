export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-semibold text-lg mb-3">
            HUT Paroki Pamulang
          </h3>
          <p className="text-sm text-white/80">
            Gereja St. Barnabas Pamulang<br />
            Bersatu dalam Iman dan Pelayanan
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Home</li>
            <li>Informasi</li>
            <li>Jadwal</li>
            <li>Sponsor</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Kontak</h4>
          <p className="text-sm text-white/80">
            Paroki St. Barnabas Pamulang<br />
            Tangerang Selatan
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-white/60 py-4 border-t border-white/20">
        © 2026 Panita HUT Paroki St. Barnabas Pamulang
      </div>
    </footer>
  )
}
