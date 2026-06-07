import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import PageWrapper from "../components/PageWrapper"

const allMerchImages = import.meta.glob(
  "../assets/Merch_HUT33/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
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
    .filter(([fileName]) =>
      fileName.toLowerCase().includes(q)
    )
    .map(([, src]) => src)
}

function pickImage(query, index = 0) {
  return getMatches(query)[index] || null
}

function formatPrice(price) {
  return `Rp ${price.toLocaleString("id-ID")}`
}

const categories = [
  {
    id: "baju-lengan-pendek",
    name: "Baju Lengan Pendek",
    description:
      "Tersedia warna Hitam, Putih, Navy, Hijau Sage, dan Merah Maroon.",
    price: 55000,
    sizes: ["S", "M", "L", "XL"],
    variants: [
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("BAJUHITAM"),
      },
      {
        label: "Putih",
        color: "Putih",
        logo: "-",
        image: pickImage("BAJUPUTIH"),
      },
      {
        label: "Navy",
        color: "Navy",
        logo: "-",
        image: pickImage("BAJUBIRUNAVY"),
      },
      {
        label: "Hijau Sage",
        color: "Hijau Sage",
        logo: "-",
        image: pickImage("BAJUHIJAUSAGE"),
      },
      {
        label: "Merah Maroon",
        color: "Merah Maroon",
        logo: "-",
        image: pickImage("BAJUMERAHMARON"),
      },
    ],
  },
  {
    id: "payung-besar",
    name: "Payung Besar",
    description:
      "Varian payung besar tersedia, namun saat ini statusnya sold out.",
    price: 95000,
    soldOut: true,
    sizes: ["All Size"],
    variants: [
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("PAYUNGBESARHITAM"),
      },
    ],
  },
  {
    id: "payung-kecil",
    name: "Payung Kecil",
    description:
      "Payung kecil yang praktis dibawa, tersedia beberapa pilihan warna.",
    price: 65000,
    sizes: ["All Size"],
    variants: [
      {
        label: "Biru Muda",
        color: "Biru Muda",
        logo: "-",
        image: pickImage("PAYUNGBIRUMUDA"),
      },
      {
        label: "Biru Navy",
        color: "Biru Navy",
        logo: "-",
        image: pickImage("PAYUNGBIRUNAVY"),
      },
      {
        label: "Maroon",
        color: "Maroon",
        logo: "-",
        image: pickImage("PAYUNGMARON"),
      },
      {
        label: "Silver",
        color: "Silver",
        logo: "-",
        image: pickImage("PAYUNGSILVER"),
      },
    ],
  },
  {
    id: "foldable-bag",
    name: "Foldable Bag",
    description:
      "Tas lipat yang ringkas dan mudah dibawa, tersedia beberapa warna.",
    price: 40000,
    sizes: ["All Size"],
    variants: [
      {
        label: "Coklat",
        color: "Coklat",
        logo: "-",
        image: pickImage("BAGCOKLAT"),
      },
      {
        label: "Hijau",
        color: "Hijau",
        logo: "-",
        image: pickImage("BAGHIJAU"),
      },
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("BAGHITAM"),
      },
    ],
  },
  {
    id: "tote-bag",
    name: "Tote Bag",
    description:
      "Tote bag serbaguna dengan pilihan warna yang elegan.",
    price: 40000,
    sizes: ["All Size"],
    variants: [
      {
        label: "Biru Navy",
        color: "Biru Navy",
        logo: "-",
        image: pickImage("TOTEBAGBIRUNAVY"),
      },
      {
        label: "Coklat Muda",
        color: "Coklat Muda",
        logo: "-",
        image: pickImage("TOTEBAGCOKLATMUDA"),
      },
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("TOTEBAGHITAM"),
      },
    ],
  },
  {
    id: "tumbler",
    name: "Tumbler",
    description:
      "Tumbler praktis untuk aktivitas harian dengan pilihan warna menarik.",
    price: 40000,
    sizes: ["All Size"],
    variants: [
      {
        label: "Gold",
        color: "Gold",
        logo: "-",
        image: pickImage("TUMBLERGOLD"),
      },
      {
        label: "Hijau",
        color: "Hijau",
        logo: "-",
        image: pickImage("TUMBLERHIJAU"),
      },
      {
        label: "Hitam",
        color: "Hitam",
        logo: "-",
        image: pickImage("TUMBLERHITAM"),
      },
      {
        label: "Rose Gold",
        color: "Rose Gold",
        logo: "-",
        image: pickImage("TUMBLERROSEGOLD"),
      },
      {
        label: "Silver",
        color: "Silver",
        logo: "-",
        image: pickImage("TUMBLERSILVER"),
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
    () =>
      categories.find((item) => item.id === openCategoryId) || null,
    [openCategoryId]
  )

  const activeVariant = useMemo(() => {
    if (!activeCategory) return null
    return activeCategory.variants[selectedVariantIndex] || activeCategory.variants[0]
  }, [activeCategory, selectedVariantIndex])

  const itemPrice = useMemo(() => {
    if (!activeCategory) return 0
    return activeCategory.price || 0
  }, [activeCategory])

  const totalPrice = itemPrice * quantity

  useEffect(() => {
    if (!activeCategory) return

    setSelectedVariantIndex(0)
    setSelectedSize(activeCategory.sizes?.[0] || "All Size")
    setQuantity(1)
  }, [activeCategory])

  useEffect(() => {
    document.body.style.overflow = activeCategory ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [activeCategory])

  const closeModal = () => {
    setOpenCategoryId(null)
    setSelectedVariantIndex(0)
    setSelectedSize("All Size")
    setQuantity(1)
  }

  const handlePreOrder = () => {
    if (!activeCategory || !activeVariant) return
    if (activeCategory.soldOut) return

    const sizeText = selectedSize || "All Size"

    const colorText =
      activeVariant.color && activeVariant.color !== "-"
        ? activeVariant.color
        : "-"

    const logoText =
      activeVariant.logo && activeVariant.logo !== "-"
        ? activeVariant.logo
        : "-"

    const message = [
      "Halo admin, saya ingin melakukan Pre Order Merchandise HUT Paroki St. Barnabas ke-33.",
      "",
      `Produk: ${activeCategory.name}`,
      `Varian: ${activeVariant.label}`,
      `Warna: ${colorText}`,
      `Logo/Model: ${logoText}`,
      `Ukuran: ${sizeText}`,
      `Harga Satuan: ${formatPrice(itemPrice)}`,
      `Jumlah: ${quantity}`,
      `Total Harga: ${formatPrice(totalPrice)}`,
      "",
      "Mohon info ketersediaan dan total pembayaran. Terima kasih.",
    ].join("\n")

    const phoneNumber = "6281298117711"
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(waUrl, "_blank")
  }

  return (
    <PageWrapper>
      <section className="min-h-screen bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
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
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
            {categories.map((category) => {
              const coverImage = category.variants.find((v) => v.image)?.image || null
              const startPrice = category.price || 0

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
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-gray-400">Foto belum tersedia</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-800">
                        {category.variants.length} varian
                      </span>

                      {category.soldOut ? (
                        <span className="inline-flex items-center rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white">
                          Sold Out
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-green-800/90 px-3 py-1 text-xs font-semibold text-white">
                          Klik katalog
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {category.name}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                      {category.description}
                    </p>

                    <p className="text-lg font-bold text-green-800">
                      {category.soldOut ? `Sold Out • ${formatPrice(startPrice)}` : formatPrice(startPrice)}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* MODAL */}
        {activeCategory && activeVariant && createPortal(
          <div
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-black/70
              backdrop-blur-[3px]
              px-4
              py-6
              animate-fadeIn
            "
            onClick={closeModal}
          >
            <div
              className="
                relative
                w-full
                max-w-3xl
                max-h-[90vh]
                overflow-y-auto
                rounded-3xl
                bg-white
                shadow-2xl
                animate-modalDown
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                {/* KIRI */}
                <div className="bg-gray-50 p-4 sm:p-5">
                  <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 aspect-[4/3]">
                    {activeVariant.image ? (
                      <img
                        src={activeVariant.image}
                        alt={`${activeCategory.name} - ${activeVariant.label}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-gray-400">Foto belum tersedia</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* KANAN */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-green-700 font-medium">
                        Detail Katalog
                      </p>

                      <h2 className="text-2xl font-bold text-green-800 mt-2 leading-tight">
                        {activeCategory.name}
                      </h2>

                      <p className="mt-2 text-lg font-semibold text-green-700">
                        Harga: {formatPrice(itemPrice)}
                      </p>

                      {activeCategory.soldOut && (
                        <p className="mt-2 inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600 border border-red-200">
                          Sold Out
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="
                        shrink-0
                        w-9
                        h-9
                        rounded-full
                        border
                        border-gray-300
                        flex
                        items-center
                        justify-center
                        text-gray-500
                        hover:bg-gray-100
                        transition
                      "
                    >
                      ✕
                    </button>
                  </div>

                  {/* VARIAN */}
                  {activeCategory.variants.length > 1 && (
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
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
                                rounded-full
                                px-3
                                py-2
                                text-sm
                                border
                                transition
                                ${
                                  isActive
                                    ? "bg-green-800 text-white border-green-800"
                                    : "border-gray-300 text-gray-700"
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

                  {/* SIZE */}
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
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
                              rounded-full
                              px-3
                              py-2
                              text-sm
                              border
                              transition
                              ${
                                isActive
                                  ? "bg-green-800 text-white border-green-800"
                                  : "border-gray-300 text-gray-700"
                              }
                            `}
                          >
                            {size}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* JUMLAH */}
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Jumlah
                    </p>

                    <div className="inline-flex items-center rounded-2xl border border-gray-300 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                        className="w-10 h-10 text-lg font-bold text-black hover:bg-gray-100 transition"
                      >
                        -
                      </button>

                      <div className="w-12 text-center font-bold text-black">
                        {quantity}
                      </div>

                      <button
                        type="button"
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="w-10 h-10 text-lg font-bold text-black hover:bg-gray-100 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* TOTAL */}
                  <div className="mb-6 rounded-2xl bg-green-50 border border-green-100 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-gray-700">
                        Total Harga
                      </span>

                      <span className="text-2xl font-bold text-green-800">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="button"
                    onClick={handlePreOrder}
                    disabled={activeCategory.soldOut}
                    className={`
                      w-full
                      rounded-2xl
                      py-3.5
                      font-semibold
                      shadow-lg
                      transition
                      ${
                        activeCategory.soldOut
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-green-800 text-white hover:bg-green-900"
                      }
                    `}
                  >
                    {activeCategory.soldOut ? "Sold Out" : "Pre Order Sekarang"}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.getElementById("modal-root")
        )}
      </section>
    </PageWrapper>
  )
}
