import React, { useState } from 'react';
import style from '../../../styles/pages/main/button.module.scss';
import { ProductButton } from '@/app/page';

type Props = {
  text: string;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<ProductButton>>;
  type: ProductButton;
};

const Button = ({ text, isClicked, setIsClicked, type }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className={
        isHover || isClicked
          ? `${style['button']} ${style['focused']}`
          : style['button']
      }
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={() => {
        setIsClicked(type);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
