import PageWrapper from "../components/PageWrapper"

export default function Sponsor() {
  const sponsors = [
    "Sponsor Utama",
    "Sponsor Pendukung",
    "Donatur",
    "Mitra Paroki",
  ]

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold text-primary mb-8">
          Sponsor & Mitra
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          {sponsors.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg h-32 flex items-center justify-center text-gray-500 bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
