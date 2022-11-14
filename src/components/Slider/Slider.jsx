import { Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/pagination';


const Slider = () => {
  return (
    <div className="slider">
      <Swiper 
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        effect={"fade"}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide className="slider__slide">
          <img src="/img/slider-1.jpg" alt="slider-1" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
        <img src="/img/slider-2.jpg" alt="slider-2" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
        <img src="/img/slider-3.jpg" alt="slider-3" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
        <img src="/img/slider-4.jpg" alt="slider-4" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Slider