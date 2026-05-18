import PageWrapper from "../components/PageWrapper"

export default function Kepanitiaan() {
  const strukturInti = [
    {
      jabatan: "Penasehat",
      anggota: ["Rm. Petrus Cipto Nugroho, SCJ"],
    },
    {
      jabatan: "Pendamping",
      anggota: [
        "DPH : M. Aga Jati Dajasmara",
        "Wilayah : Imanuel Noorwidi Jatmiko",
      ],
    },
    {
      jabatan: "Ketua",
      anggota: [
        "A. Rikartajaya (Bernadette 4)",
        "Aloysius Sumarjo (Vincentius)",
      ],
    },
    {
      jabatan: "Sekretaris",
      anggota: [
        "Fransiska Dwi Soesanti (Vincentius)",
        "Yunita Kusumadewi (Vincentius)",
      ],
    },
    {
      jabatan: "Bendahara",
      anggota: ["Donny R. Pasca (Bernadette 2)"],
    },
  ]

  const seksi = [
    {
      nama: "Seksi Dana",
      anggota: [
        "Lucia Kasih Cinsedi (Maria Magdalena)",
        "Venetius Yudhotianto (Laurensius)",
        "Wulan (Bernadette 4)",
        "Anastasia Ari (Bernadette 3)",
        "Dina Mulyani (Bernadette 2)",
        "Mawar (Andreas)",
        "Rini (Maria Magdalena)",
        "(Nama belum terisi) (SPM)",
        "Fransiska Sugiyanti Pukan (Vincentius)",
      ],
    },
    {
      nama: "Seksi Acara",
      anggota: [
        "Stefanus Tri Hartono (Vincentius)",
        "Felik Muhalim (Bernadette 2)",
        "Da Costa (Bernadette 4)",
        "Dinda (Bernadette 3)",
        "Anastasia Herfina (SPM)",
        "Siska Evos (Maria Magdalena)",
        "Robert (Maria Magdalena)",
        "Maria Y. Elshinta (Laurensius)",
        "Irene Dwi Mulyani (Vincentius)",
        "Yohana Nuraini (Vincentius)",
      ],
    },
    {
      nama: "Seksi Konsumsi",
      anggota: [
        "Emilia Sofi Haryati (Bernadette 1)",
        "Arabella Maryati (Maria Magdalena)",
        "Laurencia Sinar (Maria Magdalena)",
        "Yena (Maria Magdalena)",
        "Rafaella Rumantir (Maria Magdalena)",
        "Ester Sri Rahayu (Bernadette 3)",
        "Arry (Bernadette 3)",
        "Ade Mersiuly (Bernadette 1)",
        "Veronica Swasti (Vincentius)",
        "Regina Rosiana Sidarta (Laurensius)",
        "Priscilla Seniman Harefa (Laurensius)",
        "R.A. Rita Widjajanti S.P. (Laurensius)",
      ],
    },
    {
      nama: "Seksi Liturgi",
      anggota: [
        "Paulus A. Decky (Bernadette 3)",
        "Martinus Misdi (Andreas)",
        "Lucia Tuty Hartiningsih (Maria Magdalena)",
        "Blasius Puji Sugandono (Bernadette 1)",
      ],
    },
    {
      nama: "Seksi Perkap & Dekorasi",
      anggota: [
        "Yulius Toto Sukmanto (Laurensius)",
        "Yohanes Budi Santoso (Laurensius)",
        "Damianus Purwandoko (Laurensius)",
        "Stefanus Suherdi (Laurensius)",
        "Juan Prawira (Bernadette 2 OMK)",
        "Hugo (Bernadette 2 OMK)",
        "Bagus (Bernadette 2 OMK)",
        "Petrus Aji (Vincentius OMK)",
        "Niko (Bernadette 1 OMK)",
        "Nickodemus Yuvito Ursuliano (Andreas)",
      ],
    },
    {
      nama: "Seksi Publikasi & Dokumentasi",
      anggota: [
        "Stefanus Mipur (Vincentius)",
        "Inosensius Dwi A. (Vincentius)",
        "Bagas (Bernadette 3)",
        "Dimas (Bernadette 3)",
        "Jojo (Maria Magdalena)",
        "Valen (Maria Magdalena)",
        "Bram (Vincentius OMK)",
        "Vincentius Wendy (Laurensius)",
        "Bernardus Kevin Hadibrata (Laurensius)",
        "Benedictus Jonathan Wijaya (Laurensius)",
        "Angela Mericci Diva Febyana (Andreas)",
        "Gregorius Vinzenzto Michael (OMK Bernadette 1)",
        "Nadine (Vincentius)",
      ],
    },
    {
      nama: "Seksi Keamanan",
      anggota: [
        "Yudhi (Andreas)",
        "Alex (Maria Magdalena)",
      ],
    },
  ]

  return (
    <PageWrapper>
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full"></div>

              <span className="uppercase tracking-[0.25em] text-sm sm:text-base text-green-800 font-medium">
                Kepanitiaan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-green-800 leading-tight">
              Susunan Panitia
            </h1>

            <p className="text-gray-600 text-lg mt-4 max-w-3xl leading-relaxed">
              HUT Paroki ke-33 & Dehonian Day. Karena acara gereja
              tanpa panitia itu cuma kumpulan orang bingung yang saling
              menunggu siapa duluan pegang mic.
            </p>
          </div>

          {/* Struktur Inti */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-green-800 mb-8">
              Struktur Inti
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {strukturInti.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-green-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-800 mb-5">
                    {item.jabatan}
                  </h3>

                  <div className="space-y-3">
                    {item.anggota.map((nama, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-700 mt-3"></div>

                        <p className="text-gray-700 leading-relaxed">
                          {nama}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seksi */}
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-8">
              Seksi-Seksi
            </h2>

            <div className="space-y-8">
              {seksi.map((item, index) => (
                <div
                  key={index}
                  className="border border-green-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-green-800 mb-6">
                    {item.nama}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                    {item.anggota.map((nama, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className="text-green-700 font-semibold">
                          {idx + 1}.
                        </span>

                        <p className="text-gray-700 leading-relaxed">
                          {nama}
                        </p>
                      </div>
                    ))}
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