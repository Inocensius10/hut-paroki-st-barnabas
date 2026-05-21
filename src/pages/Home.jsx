import { useState } from "react"
import Carousel from "../components/Carousel"
import PageWrapper from "../components/PageWrapper"
import logo from "../assets/logo.png"
import ketua from "../assets/ketua.jpg"
import kupon from "../assets/kupon2.jpeg"

export default function Home() {
  const [showMoreFilosofi, setShowMoreFilosofi] = useState(false)

  return (
    <PageWrapper>
      <div className="w-full">

        {/* Hero / Carousel */}
        <Carousel />

        {/* Kata Sambutan Ketua */}
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-start">

            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
                Kata Sambutan Ketua Panitia
              </h2>

              <div className="text-black leading-relaxed text-justify space-y-5 text-[15px] md:text-base">
                <p>
                  Shalom dan salam sejahtera bagi kita semua,
                </p>

                <p>
                  Puji dan syukur kita panjatkan ke hadirat Tuhan Yang Maha Kasih,
                  karena atas berkat dan penyertaan-Nya, Paroki Pamulang – Gereja
                  Santo Barnabas Pamulang dapat merayakan Hari Ulang Tahun yang ke-33.
                </p>

                <p>
                  Perjalanan selama 33 tahun ini merupakan bukti nyata kasih dan
                  penyelenggaraan Tuhan dalam kehidupan umat. Dengan semangat
                  kebersamaan, pelayanan, dan persaudaraan, Paroki kita terus
                  bertumbuh menjadi komunitas yang hidup, aktif, dan penuh kasih.
                </p>

                <p>
                  Perayaan HUT ke-33 ini menjadi momentum bagi kita semua untuk
                  bersyukur atas setiap karya dan pelayanan yang telah dilakukan,
                  sekaligus mempererat persatuan seluruh umat dalam semangat iman
                  dan pengabdian dengan mengusung tema pada HUT Paroki ke-33 tahun
                  ini yaitu{" "}
                  <span className="font-semibold italic text-green-800">
                    “Berakar dalam Iman, bertumbuh bersama Ciptaan”
                  </span>.
                </p>

                <p>
                  Melalui rangkaian kegiatan yang telah dipersiapkan, kami berharap
                  seluruh umat dapat ikut ambil bagian dan merasakan sukacita
                  sebagai satu keluarga besar Gereja Santo Barnabas.
                </p>

                <p>
                  Kami selaku panitia mengucapkan terima kasih kepada Pastor
                  Paroki, Dewan Paroki, para donatur, sponsor, seluruh panitia,
                  serta umat yang telah mendukung dan berpartisipasi dalam
                  pelaksanaan kegiatan ini. Kiranya segala perhatian, bantuan, dan
                  kerja sama yang diberikan menjadi berkat bagi kita semua.
                </p>

                <p>
                  Akhir kata, semoga perayaan HUT ke-33 Paroki Pamulang ini semakin
                  menumbuhkan iman, harapan, dan kasih dalam kehidupan kita
                  sehari-hari serta membawa Gereja Santo Barnabas menjadi semakin
                  dewasa dalam pelayanan dan karya pastoral.
                </p>

                <p>
                  Tuhan memberkati kita semua.
                </p>

                <div className="pt-4">
                  <p>Pamulang, 18 Mei 2026</p>

                  <p className="mt-5">
                    Hormat kami,
                    <br />
                    Ketua Panitia HUT ke-33
                    <br />
                    Paroki Pamulang – Gereja Santo Barnabas
                  </p>
                </div>
              </div>
            </div>

            {/* Foto Ketua */}
            <div className="relative">

              {/* Desktop Sticky */}
              <div className="hidden md:block sticky top-28">
                <div className="flex flex-col items-center">
                  <img
                    src={ketua}
                    alt="Ketua Panitia HUT Paroki"
                    className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
                  />

                  <div className="text-center mt-6">
                    <h3 className="text-xl font-bold text-green-800">
                      A. Rikartajaya & Aloysius Sumarjo
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Ketua 1 & Ketua 2
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Normal */}
              <div className="flex flex-col items-center md:hidden mt-10">
                <img
                  src={ketua}
                  alt="Ketua Panitia HUT Paroki"
                  className="w-full max-w-sm rounded-3xl shadow-2xl object-cover"
                />

                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold text-green-800">
                    A. Rikartajaya & Aloysius Sumarjo
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Ketua 1 & Ketua 2
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Filosofi Logo */}
        <section className="w-full bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-start">

            {/* Logo Fixed */}
            <div className="relative hidden md:block">
              <div className="sticky top-28">
                <div className="flex justify-center">
                  <img
                    src={logo}
                    alt="Logo HUT Paroki St. Barnabas"
                    className="w-64 lg:w-72 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Logo */}
            <div className="flex justify-center md:hidden mb-10">
              <img
                src={logo}
                alt="Logo HUT Paroki St. Barnabas"
                className="w-52 object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-left">
                Filosofi Logo
              </h2>

              <div className="text-black leading-relaxed text-justify text-[15px] md:text-base">

                {/* Awal */}
                <p>
                  Logo HUT Paroki St. Barnabas ke-33 mengusung tema
                  <span className="font-semibold italic text-green-800">
                    {" "}“Berakar dalam iman, bertumbuh bersama ciptaan”
                  </span>{" "}
                  sebagai ajakan refleksi atas perjalanan iman dan pelayanan paroki.
                  Angka{" "}
                  <strong className="text-green-800">
                    33
                  </strong>{" "}
                  dibentuk menyatu menyerupai simbol
                  <em> infinity</em>, melambangkan kedewasaan iman dan karya pelayanan
                  yang terus berlanjut.
                </p>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => setShowMoreFilosofi((prev) => !prev)}
                  className="mt-6 inline-flex items-center gap-2 text-green-800 font-semibold hover:text-green-900 transition-all duration-300"
                >
                  <span>
                    {showMoreFilosofi ? "Read Less..." : "Read More..."}
                  </span>

                  <span
                    className={`text-2xl leading-none transition-transform duration-500 ${
                      showMoreFilosofi ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Smooth Expand */}
                <div
                  className={`grid transition-all duration-700 ease-in-out ${
                    showMoreFilosofi
                      ? "grid-rows-[1fr] opacity-100 mt-6"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <p className="mt-5">
                      Bentuk yang menyatu menggambarkan relasi yang tak terpisahkan antara
                      <strong className="text-green-800">
                        {" "}Allah, manusia, dan alam ciptaan
                      </strong>{" "}
                      dalam semangat Tritunggal. Unsur hati menjadi simbol kasih yang
                      melahirkan kepedulian terhadap lingkungan, menegaskan bahwa merawat
                      ciptaan adalah panggilan iman, bukan sekadar kewajiban.
                    </p>

                    <p className="mt-5">
                      Logo ini dirancang sederhana dan mudah dikenali sebagai sarana
                      pewartaan iman, sejalan dengan semangat
                      <strong className="text-green-800">
                        {" "}ARDAS 2026
                      </strong>
                      , bahwa keutuhan ciptaan bukan proyek sesaat, melainkan perjalanan
                      iman yang terus bertumbuh bersama.
                    </p>

                    {/* Ensiklik */}
                    <div className="mt-10 border-t border-gray-200 pt-8">

                      <h3 className="text-2xl font-bold text-green-800 mb-6 text-left">
                        Ensiklik Laudato Si’
                      </h3>

                      <div className="space-y-5 text-black leading-relaxed text-justify">

                        <p>
                          Kerusakan alam saat ini semakin parah. Penebangan hutan,
                          penggunaan energi fosil, dan sampah menjadi penyebab utama
                          rusaknya bumi. Patriark Bartolomeus mengatakan bahwa setiap
                          orang ikut menyumbang kerusakan lingkungan, baik kecil maupun
                          besar. Karena itu, kita diajak untuk menyadari dan
                          bertanggung jawab atas tindakan kita terhadap alam.
                        </p>

                        <p>
                          Dalam kehidupan sehari-hari pun, kita sering menjadi
                          penyumbang pencemaran, misalnya melalui limbah deterjen,
                          sampah rumah tangga, dan sisa makanan. Hal-hal kecil yang
                          terus dilakukan dapat berdampak besar bagi lingkungan.
                          Manusia memang makhluk cerdas, tetapi anehnya sering lebih
                          rajin merusak rumah sendiri daripada merawatnya. Spesies
                          yang bisa membuat satelit ke luar angkasa, tapi masih buang
                          sampah sembarangan. Tragis sekali.
                        </p>

                        <p>
                          Melalui Ensiklik Laudato Si’, Pope Francis mengajak umat
                          untuk melakukan pertobatan ekologis, yaitu perubahan sikap
                          dan kebiasaan agar lebih peduli terhadap alam ciptaan Tuhan.
                          Menjaga lingkungan bukan hanya pilihan, tetapi bagian penting
                          dari iman dan kehidupan Kristiani.
                        </p>

                        <p>
                          Karena itu, marilah kita bersama-sama mulai menjaga bumi
                          rumah kita bersama, salah satunya dengan mengolah sampah
                          menjadi sesuatu yang bermanfaat dan membawa berkat.
                        </p>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Pemesanan Kupon Doorprize */}
        <section className="w-full bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20">

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                Kupon Doorprize HUT ke-33
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
                Dengan membeli kupon doorprize ini, Anda turut membantu
                keberlangsungan dan kesuksesan rangkaian acara HUT Paroki
                Santo Barnabas ke-33.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[32px] shadow-xl overflow-hidden border border-gray-100">

              <div className="w-full overflow-hidden">
                <img
                  src={kupon}
                  alt="Kupon Doorprize"
                  className="w-full object-cover 
                  h-[220px] 
                  md:h-[280px] 
                  lg:h-[340px]"
                />
              </div>

              <div className="p-8 md:p-12 text-center flex flex-col items-center">

                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
                  Doorprize Resmi HUT Paroki
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug max-w-2xl">
                  Kupon Spesial HUT Paroki
                  <span className="text-green-800">
                    {" "}Santo Barnabas ke-33
                  </span>
                </h3>

                <p className="text-gray-600 mt-5 leading-relaxed max-w-2xl">
                  Mari ambil bagian dalam kemeriahan HUT Paroki dengan
                  memesan kupon doorprize sekarang juga.
                </p>

                <div className="mt-8">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeBQBlfdkeXqKE38mKIiQRgOhCFGiB5JgH91c_QpQJ_Tdrfvg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center 
                    bg-green-800 
                    text-white 
                    font-semibold 
                    px-8 py-4 
                    rounded-2xl 
                    shadow-lg 
                    transition-transform duration-300 
                    hover:scale-105"
                  >
                    PESAN SEKARANG
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Video */}
        <section className="w-full bg-white">
          <div className="max-w-5xl mx-auto px-6 py-20">

            <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
              Video Kegiatan Mengolah Sampah
            </h2>

            <div className="relative w-full overflow-hidden rounded-3xl shadow-xl aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/zhRvOrhx9p0"
                title="Video HUT Paroki St. Barnabas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </section>

      </div>
    </PageWrapper>
  )
}