import Carousel from "../components/Carousel"
import PageWrapper from "../components/PageWrapper"
import logo from "../assets/logo.png"
import ketua from "../assets/ketua.jpg"
import kupon from "../assets/kupon2.jpeg"

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full">

        {/* Hero / Carousel */}
        <Carousel />

        {/* Kata Sambutan Ketua */}
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

            {/* Kata Sambutan */}
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
        </section>

        {/* Filosofi Logo */}
        <section className="w-full bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Logo HUT Paroki St. Barnabas"
                className="w-48 md:w-56"
              />
            </div>

            {/* Teks Filosofi */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Filosofi Logo
              </h2>

              <p className="text-black leading-relaxed text-justify">
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

                <br /><br />

                Bentuk yang menyatu menggambarkan relasi yang tak terpisahkan antara
                <strong className="text-green-800">
                  {" "}Allah, manusia, dan alam ciptaan
                </strong>{" "}
                dalam semangat Tritunggal. Unsur hati menjadi simbol kasih yang
                melahirkan kepedulian terhadap lingkungan, menegaskan bahwa merawat
                ciptaan adalah panggilan iman, bukan sekadar kewajiban.

                <br /><br />

                Logo ini dirancang sederhana dan mudah dikenali sebagai sarana
                pewartaan iman, sejalan dengan semangat
                <strong className="text-green-800">
                  {" "}ARDAS 2026
                </strong>
                , bahwa keutuhan ciptaan bukan proyek sesaat, melainkan perjalanan
                iman yang terus bertumbuh bersama.
              </p>
            </div>

          </div>
        </section>

        {/* Pemesanan Kupon Doorprize */}
        <section className="w-full bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20">

            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                Kupon Doorprize HUT ke-33
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
                Dengan membeli kupon doorprize ini, Anda turut membantu
                keberlangsungan dan kesuksesan rangkaian acara HUT Paroki
                Santo Barnabas ke-33. Selain itu, Anda juga berkesempatan
                mendapatkan berbagai hadiah menarik, doorprize spesial,
                dan kejutan lainnya yang telah disiapkan oleh panitia.
              </p>
            </div>

            {/* Card Kupon */}
            <div className="bg-gray-50 rounded-[32px] shadow-xl overflow-hidden border border-gray-100">

              {/* Gambar Kupon */}
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

              {/* Konten */}
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
                  memesan kupon doorprize sekarang juga dan jadilah bagian
                  dari sukacita perayaan bersama seluruh umat.
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

        {/* Video YouTube */}
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