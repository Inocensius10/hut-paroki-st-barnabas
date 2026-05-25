import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import img1 from "../assets/Carousel1.png"
import img2 from "../assets/Carousel2.png"
import img3 from "../assets/Carousel3.png"
import img4 from "../assets/Carousel4.png"

export default function Carousel() {
  const images = [img1, img2, img3, img4]

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-[1920/900] bg-white">
              <img
                src={img}
                alt={`Carousel ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}