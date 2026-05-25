import PageWrapper from "../components/PageWrapper"

export default function Jadwal() {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-[3px] bg-green-800 rounded-full"></div>

              <span className="uppercase tracking-[0.25em] text-sm text-green-800 font-medium">
                Time Line Kegiatan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-green-800 leading-tight">
              HUT Ke-33
            </h1>

            <h2 className="text-2xl sm:text-3xl text-gray-800 mt-2">
              Paroki Pamulang - Gereja Santo Barnabas
            </h2>

            <p className="mt-6 text-lg text-gray-700 italic">
              “Mengelola Sampah Menjadi Berkat”
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-10">

            {/* 1 */}
            <div className="border border-gray-200 rounded-3xl p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.2em] text-green-700 font-semibold mb-2">
                  1. Sosialisasi Kegiatan
                </p>

                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                  Sosialisasi Kegiatan Lomba HUT Ke-33
                </h3>

                <p className="text-gray-600 mt-2">
                  GKP Lantai 2 — 02 Mei 2026
                </p>
              </div>

              <div className="space-y-4 border-l-2 border-green-200 pl-5">
                <div>
                  <p className="text-green-800 font-semibold">
                    10 – 31 Mei 2026
                  </p>

                  <p className="text-gray-800">
                    Sosialisasi Tambahan I ke wilayah-wilayah
                  </p>
                </div>

                <div>
                  <p className="text-green-800 font-semibold">
                    01 – 07 Juni 2026
                  </p>

                  <p className="text-gray-800">
                    Sosialisasi Tambahan II ke wilayah-wilayah
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="border border-gray-200 rounded-3xl p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.2em] text-green-700 font-semibold mb-2">
                  2. Kegiatan Lomba
                </p>

                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                  Mengelola Sampah Menjadi Berkat
                </h3>

                <p className="text-gray-600 mt-2">
                  03 Mei – 12 Juli 2026
                </p>
              </div>

              <div className="space-y-4 border-l-2 border-green-200 pl-5">
                <div>
                  <p className="text-green-800 font-semibold">
                    23 Mei – 14 Juni 2026
                  </p>

                  <p className="text-gray-800">
                    Visitasi I Panitia HUT ke Wilayah
                  </p>
                </div>

                <div>
                  <p className="text-green-800 font-semibold">
                    04 – 12 Juli 2026
                  </p>

                  <p className="text-gray-800">
                    Visitasi II Panitia HUT ke Wilayah
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="border border-gray-200 rounded-3xl p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.2em] text-green-700 font-semibold mb-2">
                  3. Acara Puncak
                </p>

                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                  HUT Ke-33 Paroki Pamulang
                </h3>

                <p className="text-gray-600 mt-2">
                  19 Juli 2026
                </p>
              </div>

              <div className="border-l-2 border-green-200 pl-5">
                <p className="text-green-800 font-semibold">
                  19 Juli 2026
                </p>

                <p className="text-gray-800">
                  Pengundian Kupon Doorprize Dimulai
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  )
}