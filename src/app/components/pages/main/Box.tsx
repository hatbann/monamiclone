'use client';

import React, { useState } from 'react';
import style from '../../../styles/pages/main/box.module.scss';

type BoxOrder = 'first' | 'sec' | 'third' | 'fourth' | 'fifth';

type BoxProps = {
  mainText: string;
  subText: string;
  onClick: () => void;

  order: BoxOrder;
  img: string;
};

const Box = ({ mainText, subText, onClick, order, img }: BoxProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`${style['box']} ${style[order]}`}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img src={img} alt="" className={style['img']} />
      <div
        className={
          isHover
            ? `${style['show']}  ${style['textbox']}`
            : `${style['hidden']}  ${style['textbox']}`
        }
      >
        <div className={style['info']}>
          <p className={style['sub']}>{subText}</p>
          <p className={style['main']}>{mainText}</p>
        </div>
        <img
          src="/images/plus.png"
          alt="plus"
          className={
            isHover ? `${style['plus']} ${style['rotate']}` : style['plus']
          }
        />
      </div>
    </div>
  );
};

export default Box;
