import { useState, useEffect, useCallback } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const SwiperSlider = ({ content, swiperClass = '', itemClass = '', minWidth }) => {
  const [slidesPerView, updateSlidesPerView] = useState(2)

  const visibleSliders = useCallback(() => {
    if (window.innerWidth <= minWidth)
      updateSlidesPerView(1)
    else
      updateSlidesPerView(2)
  }, [ minWidth ])

  useEffect(() => {
    visibleSliders()

    window.addEventListener('resize', visibleSliders)
  }, [ visibleSliders ])

  return (
    <Swiper
        
        modules={[ Pagination ]}
        spaceBetween={ 40 }
        slidesPerView={ slidesPerView }
        navigation
        pagination={{ clickable: true }}
        className={ 'container ' + swiperClass }
      >
        {
          content.map((element, id) => (
            <SwiperSlide key={ id } className={ itemClass }>
              { element }
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}

export default SwiperSlider
