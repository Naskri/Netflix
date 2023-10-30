import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import styled from './Swipper.module.css'
import { useRef } from 'react'

type CustomSwipperProps = {
  slides: any
  modifier?: string
}

export const CustomSwipper = ({ slides, modifier }: CustomSwipperProps) => {
  const sliderRef = useRef<SwiperType>()

  return (
    <Swiper
      spaceBetween={2}
      loop={true}
      className={styled.swiper}
      keyboard={true}
      breakpoints={{
        400: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
      }}
      onBeforeInit={(swiper) => (sliderRef.current = swiper)}
    >
      <button
        className={`${styled.customized} swiper-button-prev `}
        onClick={() => sliderRef.current?.slidePrev()}
      ></button>
      {slides?.map((item: any) => (
        <SwiperSlide
          key={item}
          className={`${styled.swiper__slide} ${styled[`swiper__slide--${modifier}`]}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt=""
            className={styled.image}
          />
        </SwiperSlide>
      ))}
      <button
        className={`${styled.customized} swiper-button-next`}
        onClick={() => sliderRef.current?.slideNext()}
      ></button>
    </Swiper>
  )
}
