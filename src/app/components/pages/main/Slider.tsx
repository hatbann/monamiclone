import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from '../../../styles/pages/main/slider.module.scss';
import SliderItem, { SliderItemType } from './SliderItem';
import { useDragScroll } from '@/app/hook/useScrollDrag';

const SliderItems: SliderItemType[] = [
  {
    img: '/images/pen1.jpg',
    category: '프리미엄펜',
    name: '프러스펜 3000 프라임',
  },
  {
    img: '/images/pen2.jpg',
    category: '프리미엄 펜',
    name: '153 리스펙트 리파인',
  },
  {
    img: '/images/pen3.jpg',
    category: '만년필',
    name: '153 아이디 만년필',
  },
  {
    img: '/images/pen4.jpg',
    category: '만년필',
    name: '153 네오 만녀필 EF',
  },
  {
    img: '/images/pen5.jpg',
    category: '프리미엄펜',
    name: '153 블랙&화이트',
  },
  {
    img: '/images/pen6.jpg',
    category: '프리미엄펜',
    name: '153 골드',
  },
  {
    img: '/images/pen7.jpg',
    category: '프리미엄펜',
    name: '153 아이디',
  },
  {
    img: '/images/pen8.jpg',
    category: '프리미엄펜',
    name: '60주년 프러스펜 데스크펜 스페셜 에디션',
  },
  {
    img: '/images/pen9.jpg',
    category: '고급샤프',
    name: '153 아이디 샤프',
  },
  {
    img: '/images/pen10.jpg',
    category: '프리미엄펜',
    name: '153 네오',
  },
  {
    img: '/images/pen11.jpg',
    category: '프리미엄펜',
    name: '153 리스펙트',
  },
];

const MultipleSlider = () => {
  /*   const settings = {
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
    draggable: true,
  }; */

  const { active, inActive, onMouseDown, onMouseUp, onMouseMove } =
    useDragScroll<HTMLDivElement>();

  return (
    <div className={style['slider']}>
      <div
        className={style['items']}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={inActive}
      >
        {SliderItems.map((item, idx) => {
          return (
            <SliderItem
              img={item.img}
              category={item.category}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MultipleSlider;
