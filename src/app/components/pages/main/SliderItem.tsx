import React from 'react';
import style from '../../../styles/pages/main/sliderItem.module.scss';

export type SliderItemType = {
  img: string;
  category: string;
  name: string;
};

const SliderItem = ({ img, category, name }: SliderItemType) => {
  return (
    <div className={style['item']}>
      <img src={img} alt="img" className={style['img']} />
      <p className={style['category']}>{category}</p>
      <h4 className={style['name']}>{name}</h4>
    </div>
  );
};

export default SliderItem;
