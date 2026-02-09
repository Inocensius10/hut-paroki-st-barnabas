import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import img1 from "../assets/Carousel1.png"
import img2 from "../assets/Carousel2.png"
import img3 from "../assets/Carousel3.png"

export default function Carousel() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[70vh] md:h-[80vh]"
      >
        {[img1, img2, img3].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={img}
                alt={`Carousel ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
