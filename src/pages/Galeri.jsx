import { useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"

import rapat1 from "../assets/galeri/rapat1.jpeg"
import rapat2 from "../assets/galeri/rapat2.jpeg"
import sosial1 from "../assets/galeri/sosial1.jpeg"
import sosial2 from "../assets/galeri/sosial2.jpeg"

const getYoutubeEmbedUrl = (url) => {
  const videoId = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/
  )?.[1]

  return `https://www.youtube.com/embed/${videoId}`
}

export default function Galeri() {
  const galeri = [
    {
      title: "Rapat Harian",
      desc: "Dokumentasi rapat harian panitia HUT Paroki Santo Barnabas ke-33.",
      images: [rapat1, rapat2],
    },
    {
      title: 'Sosialisasi Kegiatan HUT Paroki "Mengelola Sampah Menjadi Berkat"',
      desc: "Kegiatan sosialisasi ke masing-masing koorwil mengenai program dan kegiatan HUT Paroki.",
      images: [sosial1, sosial2],
    },
  ]

  const videos = [
    {
      title: "Video Kegiatan HUT Paroki",
      url: "https://youtu.be/aJim4N8jmOE?si=cJtOtZkQsLi3S3CW",
    },
    {
      title: "Dokumentasi Kegiatan Paroki",
      url: "https://youtu.be/G3zbiVeFlF4?si=RtVhMj3Pvk81aK4h",
    },
  ]

  return (
    <PageWrapper>
      <section className="min-h-screen bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full"></div>

              <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-green-800 font-medium">
                Dokumentasi Kegiatan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 leading-tight">
              Galeri
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Kumpulan dokumentasi kegiatan HUT Paroki Santo Barnabas ke-33.
              Foto-foto kegiatan akan ditampilkan di halaman ini.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {galeri.map((item, index) => (
              <GalleryCard key={index} item={item} />
            ))}
          </div>
          {/* Video Kegiatan */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-3 bg-green-800 rounded-r-full"></div>

              <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-green-800 font-medium">
                Dokumentasi Video
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
              Video Kegiatan
            </h2>

            <p className="text-gray-600 mb-10 max-w-2xl">
              Saksikan dokumentasi kegiatan HUT Paroki Santo Barnabas ke-33 melalui
              video yang telah dipublikasikan.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    border
                    border-gray-200
                    rounded-3xl
                    overflow-hidden
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >
                  <div className="aspect-video">
                    <iframe
                      src={getYoutubeEmbedUrl(video.url)}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

function GalleryCard({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1
      )
    }, 3500)

    return () => clearInterval(interval)
  }, [item.images.length])

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === item.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    )
  }

  return (
    <div
      className="
        group
        bg-white
        border
        border-gray-200
        rounded-3xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Image Slider */}
      <div className="relative h-[320px] overflow-hidden">
        {item.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={item.title}
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              ${
                idx === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }
            `}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Arrow Left */}
        <button
          onClick={prevSlide}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-white/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            shadow-md
            hover:scale-110
            transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Arrow Right */}
        <button
          onClick={nextSlide}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-white/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            shadow-md
            hover:scale-110
            transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {item.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${
                  idx === currentIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/50"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-800 mb-3 leading-snug">
          {item.title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {item.desc}
        </p>
      </div>
    </div>
  )
}