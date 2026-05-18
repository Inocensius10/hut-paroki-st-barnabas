import { useState } from "react"
import PageWrapper from "../components/PageWrapper"
import logo2 from "../assets/logo2.png"

export default function Informasi() {

  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <PageWrapper>
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="mb-16">

            {/* Label */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full"></div>

              <span className="uppercase tracking-[0.25em] text-sm sm:text-base text-green-800 font-medium">
                Informasi Acara
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

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-28">

            {/* Left */}
            <div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Perayaan HUT ke-33 Paroki Santo Barnabas Pamulang
                menjadi momentum perjalanan iman seluruh umat untuk
                terus bertumbuh bersama dalam kasih, pelayanan,
                dan kepedulian terhadap sesama serta alam ciptaan.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Mengusung tema
                <span className="font-semibold text-green-800">
                  {" "}
                  “Berakar dalam iman, bertumbuh bersama ciptaan”
                </span>,
                kegiatan HUT tahun ini mengajak seluruh umat untuk
                membangun kesadaran bahwa merawat bumi bukan hanya
                tanggung jawab sosial, tetapi juga bagian dari panggilan iman.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Rangkaian kegiatan dimulai sejak Mei 2026 melalui
                program pengolahan sampah menjadi berkat yang melibatkan
                lingkungan, wilayah, OMK, dan keluarga dalam semangat
                kolaborasi serta kepedulian terhadap keutuhan ciptaan.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Dengan semangat Laudato Si dan ARDAS 2026,
                seluruh umat diajak untuk menjadikan kepedulian terhadap
                lingkungan sebagai bagian nyata dari kehidupan menggereja.
                Karena bumi ini sudah cukup lelah menghadapi manusia
                yang membuang sampah sembarangan lalu upload quotes
                tentang “healing dengan alam”.
              </p>

            </div>

            {/* Right */}
            <div className="flex justify-center">

              <div className="bg-white border border-green-100 rounded-[2rem] p-8 shadow-lg shadow-green-100/40 max-w-md w-full">

                <img
                  src={logo2}
                  alt="Logo HUT Paroki"
                  className="w-72 mx-auto mb-10 object-contain"
                />

                <div className="space-y-6">

                  <div>
                    <h3 className="text-green-800 font-semibold text-lg mb-1">
                      Tema HUT
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      Berakar dalam iman, bertumbuh bersama ciptaan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-green-800 font-semibold text-lg mb-1">
                      Fokus Kegiatan
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      Pengolahan sampah menjadi berkat dan aksi nyata
                      kepedulian terhadap lingkungan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-green-800 font-semibold text-lg mb-1">
                      Puncak Acara
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      19 Juli 2026 bersama seluruh umat
                      Paroki Santo Barnabas Pamulang.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Penilaian */}
          <div>

            {/* Heading */}
            <div className="mb-12">

              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full"></div>

                <span className="uppercase tracking-[0.25em] text-sm sm:text-base text-green-800 font-medium">
                  Sistem Penilaian
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
                Indikator Penilaian
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                Penilaian dilakukan berdasarkan proses awal,
                pelaksanaan kegiatan, hingga hasil akhir pengolahan
                sampah menjadi berkat.
              </p>

            </div>

            {/* Accordion */}
            <div className="space-y-5">

              {/* Accordion Item */}
              {[
                {
                  id: "awal",
                  title: "Kegiatan Awal",
                  score: "25",
                  content: [
                    {
                      title: "Struktur Organisasi",
                      items: [
                        "Struktur lengkap tingkat wilayah dengan SOP operasional (5)",
                        "Struktur lengkap tingkat lingkungan (4)",
                        "Hanya ketua dan wakil ketua (3)",
                        "Tidak ada struktur organisasi jelas (1-2)",
                      ],
                    },
                    {
                      title: "Keterlibatan Warga",
                      items: [
                        "Melibatkan seluruh lingkungan dalam struktur organisasi (5)",
                        "Melibatkan ketua lingkungan (4)",
                        "Hanya sebagian lingkungan (3)",
                        "Hanya lingkungan yang bersedia (1-2)",
                      ],
                    },
                    {
                      title: "Keterlibatan OMK",
                      items: [
                        "OMK masuk jajaran inti pengurus (8-10)",
                        "OMK sebagai koordinator bidang (4-7)",
                        "OMK sebagai anggota (3)",
                        "OMK hanya tentatif (2)",
                        "Tidak melibatkan OMK (1)",
                      ],
                    },
                  ],
                },

                {
                  id: "pelaksanaan",
                  title: "Pelaksanaan",
                  score: "50",
                  content: [
                    {
                      title: "Tempat Pengelolaan Sampah",
                      items: [
                        "Memiliki TPST/TPS 3R terintegrasi (5)",
                        "Lokasi aman dan tidak mengganggu warga (4)",
                        "Menyatu dengan rumah warga (3)",
                        "Menggunakan fasilitas umum seadanya (1-2)",
                      ],
                    },
                    {
                      title: "Pemilahan Sampah",
                      items: [
                        "Sampah dipilah lengkap dengan data penyetor (5)",
                        "Dipilah tanpa data lengkap (4)",
                        "Belum ada pemilahan jelas (3)",
                        "Sampah berasal dari luar wilayah (1-2)",
                      ],
                    },
                    {
                      title: "Keterlibatan OMK",
                      items: [
                        "OMK aktif dalam pengolahan dan edukasi umat (8-10)",
                        "OMK aktif dalam pengumpulan sampah (6-7)",
                        "OMK aktif kampanye media sosial/poster (3-5)",
                        "OMK tidak aktif dalam program (1-2)",
                      ],
                    },
                  ],
                },

                {
                  id: "akhir",
                  title: "Akhir Kegiatan",
                  score: "25",
                  content: [
                    {
                      title: "Hasil Produk",
                      items: [
                        "Produk bernilai ekonomi dan bermanfaat (5)",
                        "Produk meningkatkan pendapatan warga (4)",
                        "Produk belum berhasil sempurna (3)",
                        "Tidak menghasilkan produk (1-2)",
                      ],
                    },
                    {
                      title: "Evaluasi",
                      items: [
                        "Ada portofolio evaluasi lengkap 3 bulan (5)",
                        "Ada evaluasi akhir kegiatan (4)",
                        "Evaluasi terbatas (3)",
                        "Tidak ada evaluasi (1-2)",
                      ],
                    },
                    {
                      title: "Dokumentasi",
                      items: [
                        "Arsip digital tersedia di website/media sosial (5)",
                        "Produk tersimpan di gudang/ruangan (4)",
                        "Hanya berupa arsip biasa (3)",
                        "Tidak ada dokumentasi (1-2)",
                      ],
                    },
                  ],
                },
              ].map((section) => (
                <div
                  key={section.id}
                  className="border border-green-100 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >

                  {/* Button */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-8 py-7 flex items-center justify-between text-left"
                  >

                    <div>
                      <h3 className="text-2xl font-semibold text-green-800">
                        {section.title}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        Skor Penilaian : {section.score}
                      </p>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-full border border-green-200 flex items-center justify-center text-2xl text-green-800 transition-all duration-500 ${
                        openSection === section.id
                          ? "rotate-180 bg-green-50"
                          : ""
                      }`}
                    >
                      +
                    </div>

                  </button>

                  {/* Smooth Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openSection === section.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="px-8 pb-8 space-y-8">

                        {section.content.map((item, index) => (
                          <div key={index}>

                            <h4 className="text-lg font-semibold text-green-800 mb-4">
                              {item.title}
                            </h4>

                            <div className="space-y-3">

                              {item.items.map((point, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3"
                                >

                                  <div className="w-2 h-2 rounded-full bg-green-700 mt-3"></div>

                                  <p className="text-gray-700 leading-relaxed">
                                    {point}
                                  </p>

                                </div>
                              ))}

                            </div>

                          </div>
                        ))}

                      </div>

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