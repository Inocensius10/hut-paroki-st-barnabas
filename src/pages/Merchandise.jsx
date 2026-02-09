import PageWrapper from "../components/PageWrapper"

export default function Merchandise() {
  const items = [
    {
      nama: "Kaos HUT Paroki",
      deskripsi: "Kaos resmi HUT Paroki St. Barnabas ke-33",
    },
    {
      nama: "Jaket Paroki",
      deskripsi: "Jaket eksklusif dengan tema keutuhan ciptaan",
    },
    {
      nama: "Tumbler",
      deskripsi: "Tumbler ramah lingkungan edisi HUT Paroki",
    },
    {
      nama: "Payung",
      deskripsi: "Payung lipat dengan logo HUT Paroki",
    },
  ]

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold text-primary mb-4">
          Merchandise
        </h1>
        <p className="text-gray-600 mb-10">
          Dukung perayaan HUT Paroki St. Barnabas ke-33 dengan memiliki
          merchandise resmi yang sarat makna dan kepedulian terhadap ciptaan.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 bg-white hover:shadow-md transition"
            >
              {/* Placeholder gambar */}
              <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                Foto Produk
              </div>

              <h3 className="font-semibold text-lg text-primary mb-1">
                {item.nama}
              </h3>
              <p className="text-sm text-gray-600">
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
