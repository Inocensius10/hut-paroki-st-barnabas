import PageWrapper from "../components/PageWrapper"

export default function Galeri() {
  const galeri = [
    {
      title: "Kegiatan Pembukaan",
      desc: "Dokumentasi pembukaan HUT Paroki ke-33",
    },
    {
      title: "Visitasi Wilayah",
      desc: "Kunjungan tim visitasi ke wilayah umat",
    },
    {
      title: "Lomba & Kebersamaan",
      desc: "Momen kegiatan lomba dan kebersamaan umat",
    },
    {
      title: "Acara Puncak",
      desc: "Perayaan puncak HUT Paroki Pamulang",
    },
    {
      title: "Pelayanan Panitia",
      desc: "Keseruan dan pelayanan panitia acara",
    },
    {
      title: "Dokumentasi Misa",
      desc: "Misa syukur dan rangkaian ibadah",
    },
  ]

  return (
    <PageWrapper>
      <section className="min-h-screen bg-white py-24 px-4 sm:px-6">
        
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-14">
            
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full"></div>

              <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-green-800 font-medium">
                Dokumentasi Kegiatan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 leading-tight">
              Galeri
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Kumpulan dokumentasi kegiatan HUT Paroki Pamulang ke-33.
              Foto-foto kegiatan akan ditampilkan di halaman ini.
            </p>
          </div>

          {/* Grid Galeri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {galeri.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                
                {/* Placeholder Image */}
                <div
                  className="
                    h-64
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    relative
                    overflow-hidden
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-gray-100"></div>

                  <div className="relative z-10 flex flex-col items-center text-gray-400">
                    
                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-14 h-14 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25v-.75z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 10.5h.008v.008H8.25V10.5zm2.742 5.25l2.633-3.292a1.125 1.125 0 011.758 0l2.867 3.584"
                      />
                    </svg>

                    <span className="text-sm font-medium">
                      Foto Belum Tersedia
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}