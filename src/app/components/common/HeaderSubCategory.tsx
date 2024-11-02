import React from 'react';
import style from '../../styles/common/headerSubCategory.module.scss';

const HeaderSubCategory = ({
  name,
  isFocused,
}: {
  name: string;
  isFocused: boolean;
}) => {
  return (
    <div
      className={
        isFocused ? `${style['name']} ${style['focused']}` : style['name']
      }
    >
      {name}
    </div>
  );
};

export default HeaderSubCategory;
