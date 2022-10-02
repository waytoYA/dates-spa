import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface ISlide {
  year: number;
  text: string;
}

const InfoBlock = ({news}: any) => {
  
    return (
      <section className='infoBlock'>

        <div className="infoBlock__button__prev"></div>


        <Swiper 
          className='infoBlock__news'

          grabCursor={true}
          slidesPerView={'auto'}
          modules={[Navigation, Pagination]}
          navigation={{nextEl: '.infoBlock__button__next',
                      prevEl: '.infoBlock__button__prev',
                      disabledClass: 'hidden',}}
          pagination={{
            clickable: true,
            el: '.infoBlock__pagination',
          }}
        >

          {news.map((slide: ISlide)=>
              <SwiperSlide className='infoBlock__item' key={slide.year}>
                <div className='infoBlock__item__year'>{slide.year}</div>
                <div className='infoBlock__item__text'>
                {slide.text}
                </div>
            </SwiperSlide>
          )}


        </Swiper>

        <div className="infoBlock__button__next"></div>

        <div className='infoBlock__pagination'></div>

        </section>
    );
  }


export default InfoBlock;
