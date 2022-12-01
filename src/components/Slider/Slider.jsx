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
        className="Swiper"
      >
        <SwiperSlide className="slider__slide">
          <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coderhous-192d5.appspot.com/o/slider-1.jpg?alt=media&token=e8750ae5-662b-4f01-877a-d308f6fc6a38" alt="slider-1" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coderhous-192d5.appspot.com/o/slider-2.jpg?alt=media&token=0fe7b499-0462-4214-aa38-179a38b39dbc" alt="slider-2" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coderhous-192d5.appspot.com/o/slider-3.jpg?alt=media&token=c88f198b-51bd-4442-b596-b76bc56e54fe" alt="slider-3" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coderhous-192d5.appspot.com/o/slider-4.jpg?alt=media&token=c0ff2e59-3f04-46f6-b950-b9cdefb3101e" alt="slider-4" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Slider