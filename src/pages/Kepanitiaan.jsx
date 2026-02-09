export default function Kepanitiaan() {
  const panitia = [
    { jabatan: "Ketua Panitia", nama: "Nama Ketua" },
    { jabatan: "Wakil Ketua", nama: "Nama Wakil" },
    { jabatan: "Sekretaris", nama: "Nama Sekretaris" },
    { jabatan: "Bendahara", nama: "Nama Bendahara" },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-primary mb-8">
        Susunan Kepanitiaan
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {panitia.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 bg-white shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.jabatan}</p>
            <h3 className="text-lg font-semibold text-primary">
              {item.nama}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
