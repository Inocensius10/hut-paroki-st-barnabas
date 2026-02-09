import logo from "../assets/logo.png"

export default function Logo() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold text-primary mb-8">
        Logo HUT Paroki
      </h1>

      <img
        src={logo}
        alt="Logo HUT Paroki"
        className="mx-auto w-48 mb-6"
      />

      <p className="text-gray-600 leading-relaxed">
        Logo HUT Paroki St. Barnabas menggambarkan semangat kebersamaan,
        pelayanan, serta pertumbuhan iman umat. Warna hijau tua
        melambangkan harapan, kehidupan, dan keteguhan iman Kristiani.
      </p>
    </div>
  )
}
