import { useEffect, useMemo, useState } from "react"
import PageWrapper from "../components/PageWrapper"

const allMerchImages = import.meta.glob(
  "../assets/Merch_HUT33/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
)

const merchImages = Object.fromEntries(
  Object.entries(allMerchImages).map(([path, src]) => [
    path.split("/").pop(),
    src,
  ])
)

function getMatches(query) {
  const q = query.toLowerCase()
  return Object.entries(merchImages)
    .filter(([fileName]) => fileName.toLowerCase().includes(q))
    .map(([, src]) => src)
}

function pickImage(query, index = 0) {
  return getMatches(query)[index] || null
}

const categories = [
  {
    id: "baju-lengan-panjang",
    name: "Baju Lengan Panjang",
    description: "Tersedia warna hitam dan putih dengan logo 1 dan logo 2.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: [
      {
        label: "Hitam - Logo 1",
        color: "Hitam",
        logo: "Logo 1",
        image: pickImage("BAJULENGANPANJANGHITAM", 0),
      },
      {
        label: "Hitam - Logo 2",
        color: "Hitam",
        logo: "Logo 2",
        image: pickImage("BAJULENGANPANJANGHITAM", 1),
      },
      {
        label: "Putih - Logo 1",
        color: "Putih",
        logo: "Logo 1",
        image: pickImage("BAJULENGANPANJANGPUTIH", 0),
      },
      {
        label: "Putih - Logo 2",
        color: "Putih",
        logo: "Logo 2",
        image: pickImage("BAJULENGANPANJANGPUTIH", 1),
      },
    ],
  },
  {
    id: "baju-lengan-pendek",
    name: "Baju Lengan Pendek",
    description: "Tersedia warna hitam dan putih dengan logo 1 dan logo 2.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: [
      {
        label: "Hitam - Logo 1",
        color: "Hitam",
        logo: "Logo 1",
        image: pickImage("BAJULENGANPENDEKHITAM", 0),
      },
      {
        label: "Hitam - Logo 2",
        color: "Hitam",
        logo: "Logo 2",
        image: pickImage("BAJULENGANPENDEKHITAM", 1),
      },
      {
        label: "Putih - Logo 1",
        color: "Putih",
        logo: "Logo 1",
        image: pickImage("BAJULENGANPENDEKPUTIH", 0),
      },
      {
        label: "Putih - Logo 2",
        color: "Putih",
        logo: "Logo 2",
        image: pickImage("BAJULENGANPENDEKPUTIH", 1),
      },
    ],
  },
  {
    id: "hoodie",
    name: "Hoodie",
    description: "Hoodie eksklusif HUT Paroki dalam pilihan hitam dan putih.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: [
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("HOODIEHITAM"),
      },
      {
        label: "Putih",
        color: "Putih",
        logo: "-",
        image: pickImage("HOODIEPUTIH"),
      },
    ],
  },
  {
    id: "gelas",
    name: "Gelas",
    description: "Gelas edisi HUT Paroki dalam warna hitam dan putih.",
    sizes: ["All Size"],
    variants: [
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("GELASHITAM"),
      },
      {
        label: "Putih",
        color: "Putih",
        logo: "-",
        image: pickImage("GELASPUTIH"),
      },
    ],
  },
  {
    id: "payung-besar",
    name: "Payung Besar",
    description: "Payung besar untuk kebutuhan harian dan acara.",
    sizes: ["All Size"],
    variants: [
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("PAYUNGBESARHITAM"),
      },
      {
        label: "Putih",
        color: "Putih",
        logo: "-",
        image: pickImage("PAYUNGBESARPUTIH"),
      },
    ],
  },
  {
    id: "payung-kecil",
    name: "Payung Kecil",
    description: "Payung kecil yang praktis dibawa ke mana saja.",
    sizes: ["All Size"],
    variants: [
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("PAYUNGKECILHITAM"),
      },
      {
        label: "Putih",
        color: "Putih",
        logo: "-",
        image: pickImage("PAYUNGKECILPUTIH"),
      },
    ],
  },
  {
    id: "topi",
    name: "Topi",
    description: "Topi merchandise dengan beberapa pilihan tampilan.",
    sizes: ["All Size"],
    variants: [
      {
        label: "Hitam 1",
        color: "Hitam",
        logo: "Model 1",
        image: pickImage("TOPIHITAM"),
      },
      {
        label: "Hitam 2",
        color: "Hitam",
        logo: "Model 2",
        image: pickImage("TOPIHITAM2"),
      },
      {
        label: "Putih",
        color: "Putih",
        logo: "Model 1",
        image: pickImage("TOPIPUTIH"),
      },
    ],
  },
  {
    id: "toughbag",
    name: "Toughbag",
    description: "Tas serbaguna edisi HUT Paroki, dua pilihan model.",
    sizes: ["All Size"],
    variants: [
      {
        label: "Model 1",
        color: "-",
        logo: "-",
        image: pickImage("TOUGHBAG1"),
      },
      {
        label: "Model 2",
        color: "-",
        logo: "-",
        image: pickImage("TOUGHBAG2"),
      },
    ],
  },
  {
    id: "tumbler",
    name: "Tumbler",
    description: "Tumbler ramah lingkungan dengan warna hitam dan putih.",
    sizes: ["All Size"],
    variants: [
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("TUMBLERHITAM"),
      },
      {
        label: "Putih",
        color: "Putih",
        logo: "-",
        image: pickImage("TUMBLERPUTIH"),
      },
    ],
  },
]

export default function Merchandise() {
  const [openCategoryId, setOpenCategoryId] = useState(null)
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState("All Size")
  const [quantity, setQuantity] = useState(1)

  const activeCategory = useMemo(
    () => categories.find((item) => item.id === openCategoryId) || null,
    [openCategoryId]
  )

  const activeVariant = useMemo(() => {
    if (!activeCategory) return null
    return activeCategory.variants[selectedVariantIndex] || activeCategory.variants[0]
  }, [activeCategory, selectedVariantIndex])

  useEffect(() => {
    if (!activeCategory) return
    setSelectedVariantIndex(0)
    setSelectedSize(activeCategory.sizes?.[0] || "All Size")
    setQuantity(1)
  }, [activeCategory])

  const closeModal = () => {
    setOpenCategoryId(null)
    setSelectedVariantIndex(0)
    setSelectedSize("All Size")
    setQuantity(1)
  }

  const handlePreOrder = () => {
    if (!activeCategory || !activeVariant) return

    const sizeText = selectedSize || "All Size"
    const colorText = activeVariant.color && activeVariant.color !== "-" ? activeVariant.color : "-"
    const logoText = activeVariant.logo && activeVariant.logo !== "-" ? activeVariant.logo : "-"

    const message = [
      "Halo admin, saya ingin melakukan Pre Order Merchandise HUT Paroki St. Barnabas ke-33.",
      "",
      `Produk: ${activeCategory.name}`,
      `Varian: ${activeVariant.label}`,
      `Warna: ${colorText}`,
      `Logo/Model: ${logoText}`,
      `Ukuran: ${sizeText}`,
      `Jumlah: ${quantity}`,
      "",
      "Mohon info ketersediaan dan total pembayaran. Terima kasih.",
    ].join("\n")

    const phoneNumber = "6281774851939"
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(waUrl, "_blank")
  }

  return (
    <PageWrapper>
      <section className="min-h-screen bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full" />

              <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-green-800 font-medium">
                Merchandise Resmi
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 leading-tight">
              Merchandise
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Pilih merchandise HUT Paroki St. Barnabas ke-33 berdasarkan kategori.
              Klik katalog untuk melihat varian, warna, logo, ukuran, lalu pesan langsung ke WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
            {categories.map((category) => {
              const coverImage = category.variants.find((v) => v.image)?.image || null

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setOpenCategoryId(category.id)}
                  className="
                    text-left
                    group
                    bg-white
                    border
                    border-gray-200
                    rounded-3xl
                    overflow-hidden
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                    duration-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-700/40
                  "
                >
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    {coverImage ? (
                      <img
                        src={coverImage}
                        alt={category.name}
                        className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">
                        <span className="text-gray-400 font-medium">
                          Foto belum tersedia
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-800">
                        {category.variants.length} varian
                      </span>
                      <span className="inline-flex items-center rounded-full bg-green-800/90 px-3 py-1 text-xs font-semibold text-white">
                        Klik katalog
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {category.name}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {activeCategory && activeVariant && (
          <div
            className="fixed inset-0 z-50 bg-black/60 p-4 sm:p-6 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="
                w-full
                max-w-5xl
                max-h-[92vh]
                overflow-y-auto
                rounded-3xl
                bg-white
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2">
                <div className="bg-gray-50 p-4 sm:p-6">
                  <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 aspect-[4/3]">
                    {activeVariant.image ? (
                      <img
                        src={activeVariant.image}
                        alt={`${activeCategory.name} - ${activeVariant.label}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">
                        <span className="text-gray-400 font-medium">
                          Foto varian belum tersedia
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-gray-200 p-3">
                      <p className="text-gray-500">Kategori</p>
                      <p className="font-semibold text-green-800">{activeCategory.name}</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 p-3">
                      <p className="text-gray-500">Varian</p>
                      <p className="font-semibold text-green-800">{activeVariant.label}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-green-700 font-medium">
                        Detail Katalog
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mt-2">
                        {activeCategory.name}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="shrink-0 rounded-full border border-gray-200 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-300 transition"
                      aria-label="Tutup"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Pilih varian, ukuran, dan jumlah. Setelah itu tekan tombol pre-order untuk langsung ke WhatsApp.
                  </p>

                  {activeCategory.variants.length > 1 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">
                        Pilih Varian
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {activeCategory.variants.map((variant, index) => {
                          const isActive = index === selectedVariantIndex

                          return (
                            <button
                              key={variant.label}
                              type="button"
                              onClick={() => setSelectedVariantIndex(index)}
                              className={`
                                rounded-full px-4 py-2 text-sm font-medium border transition
                                ${
                                  isActive
                                    ? "bg-green-800 text-white border-green-800"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-green-700 hover:text-green-800"
                                }
                              `}
                            >
                              {variant.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      Pilih Ukuran
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeCategory.sizes.map((size) => {
                        const isActive = selectedSize === size

                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`
                              rounded-full px-4 py-2 text-sm font-medium border transition
                              ${
                                isActive
                                  ? "bg-green-800 text-white border-green-800"
                                  : "bg-white text-gray-700 border-gray-300 hover:border-green-700 hover:text-green-800"
                              }
                            `}
                          >
                            {size}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mb-8">
  <p className="text-sm font-semibold text-gray-700 mb-3">
    Jumlah
  </p>

  <div className="inline-flex items-center rounded-2xl border border-gray-300 overflow-hidden bg-white">
    
    <button
      type="button"
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
      className="
        w-11
        h-11
        flex
        items-center
        justify-center
        text-lg
        font-bold
        text-black
        hover:bg-gray-100
        transition
      "
      aria-label="Kurangi jumlah"
    >
      -
    </button>

    <div
      className="
        w-14
        text-center
        font-bold
        text-black
        bg-white
      "
    >
      {quantity}
    </div>

    <button
      type="button"
      onClick={() => setQuantity((prev) => prev + 1)}
      className="
        w-11
        h-11
        flex
        items-center
        justify-center
        text-lg
        font-bold
        text-black
        hover:bg-gray-100
        transition
      "
      aria-label="Tambah jumlah"
    >
      +
    </button>

  </div>
</div>

                  <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4 mb-6 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800 mb-2">Ringkasan Pesanan</p>
                    <div className="space-y-1 text-gray-600">
                      <p>Produk: {activeCategory.name}</p>
                      <p>Varian: {activeVariant.label}</p>
                      <p>Ukuran: {selectedSize}</p>
                      <p>Jumlah: {quantity}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handlePreOrder}
                    className="
                      w-full
                      rounded-2xl
                      bg-green-800
                      text-white
                      py-4
                      font-semibold
                      text-base
                      sm:text-lg
                      shadow-lg shadow-green-800/20
                      hover:bg-green-900
                      transition
                    "
                  >
                    Pre Order Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </PageWrapper>
  )
}