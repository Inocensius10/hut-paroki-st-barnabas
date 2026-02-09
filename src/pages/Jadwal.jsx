export default function Jadwal() {
  const jadwal = [
    { hari: "Senin", acara: "Pembukaan HUT Paroki", waktu: "18.00 WIB" },
    { hari: "Rabu", acara: "Misa Syukur", waktu: "17.00 WIB" },
    { hari: "Jumat", acara: "Lomba & Pentas Seni", waktu: "16.00 WIB" },
    { hari: "Minggu", acara: "Puncak Acara", waktu: "09.00 WIB" },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-primary mb-8">
        Jadwal Kegiatan
      </h1>

      <div className="grid gap-4">
        {jadwal.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 flex justify-between items-center hover:bg-gray-50"
          >
            <div>
              <h3 className="font-medium">{item.acara}</h3>
              <p className="text-sm text-gray-500">{item.hari}</p>
            </div>
            <span className="text-primary font-semibold">
              {item.waktu}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
