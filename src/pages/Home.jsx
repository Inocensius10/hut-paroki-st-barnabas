import Carousel from "../components/Carousel"
import PageWrapper from "../components/PageWrapper"
import logo from "../assets/logo.png"

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full">

        {/* Hero / Carousel */}
        <Carousel />

        {/* Filosofi Logo */}
        <section className="w-full bg-white">
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

        {/* Video YouTube */}
        <section className="w-full bg-gray-50">
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