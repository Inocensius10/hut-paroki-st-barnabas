import PageWrapper from "../components/PageWrapper"

export default function Jadwal() {
  const timeline = [
    {
      tanggal: "2 Mei 2026",
      kegiatan:
        'Sosialisasi Kegiatan HUT Paroki "Mengelola Sampah menjadi Berkat"',
    },
    {
      tanggal: "3 Mei 2026",
      kegiatan: "Kegiatan HUT Paroki Pamulang ke-33 dimulai",
    },
    {
      tanggal: "Mei - Juli 2026",
      kegiatan:
        "Kunjungan Tim Visitasi ke Wilayah (disesuaikan jadwal wilayah)",
    },
    {
      tanggal: "19 Juli 2026",
      kegiatan: "Acara Puncak HUT Paroki Pamulang ke-33",
    },
  ]

  return (
    <PageWrapper>
      <section className="min-h-screen bg-white py-24 px-4 sm:px-6">
        
        {/* Container */}
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-14">
            
            {/* Label */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full"></div>

              <span className="uuppercase tracking-[0.2em] text-sm sm:text-base text-green-800 font-medium">
                Time Line Kegiatan
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 leading-tight">
              HUT Paroki Pamulang
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-700 mt-2 font-light">
              ke-33
            </h2>
          </div>

          {/* Tema */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-black leading-snug">
              Mengelola sampah
              <span className="font-semibold"> menjadi berkat</span>
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            
            {/* Garis Timeline */}
            <div className="hidden md:block absolute left-5 top-0 bottom-0 w-1 bg-green-700/20 rounded-full"></div>

            <div className="flex flex-col gap-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="
                    relative
                    bg-white
                    border
                    border-gray-200
                    rounded-3xl
                    p-5
                    sm:p-6
                    shadow-sm
                    hover:shadow-md
                    transition-all
                    duration-300
                    md:ml-14
                  "
                >
                  {/* Dot Timeline */}
                  <div
                    className="
                      hidden md:block
                      absolute
                      -left-12
                      top-7
                      w-5
                      h-5
                      rounded-full
                      bg-green-700
                      border-4
                      border-white
                    "
                  ></div>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                    
                    {/* Tanggal */}
                    <div className="md:min-w-[220px]">
                      <p className="text-lg sm:text-xl font-semibold text-green-800">
                        {item.tanggal}
                      </p>
                    </div>

                    {/* Isi */}
                    <div className="flex-1">
                      <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                        {item.kegiatan}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  )
}