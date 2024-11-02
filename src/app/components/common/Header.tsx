'use client';

import React, { useState } from 'react';
import style from '../../styles/common/header.module.scss';
import HeaderCategory from './HeaderCategory';
import HeaderSubCategory from './HeaderSubCategory';

export type CategoryType = {
  name: string;
  subs: string[];
};

const HeaderCategories: CategoryType[] = [
  {
    name: '모나미소개',
    subs: ['CEO 메시지', '회사정보', '회사연혁', '윤리강령', '투자정보', 'CI'],
  },
  {
    name: '모나미제품',
    subs: [
      '프리미엄 펜',
      '펜-펜슬',
      '마카-컬러링',
      '노트,사무용품',
      '잉크,리필',
      '카탈로그',
    ],
  },
  {
    name: 'NEWS&VIDEO',
    subs: ['보도자료', '동영상자료'],
  },
  {
    name: '모나미 미술대회',
    subs: ['미술대회 소개', '수상작 발표'],
  },
  {
    name: '고객지원',
    subs: ['자주묻는질문', '문의하기'],
  },
  {
    name: '기업 구매/개발',
    subs: ['대량 구매 문의', '기업 및 단체 구매', '산업용 맞춤 제품개발'],
  },
];

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  const [focusName, setFocusName] = useState('');
  const [subFucusName, setSubFocusName] = useState('');

  return (
    <div className={style['header-container']}>
      <div className={style['top-header']}>
        <div className={style['main-header']}>
          <img src="/images/logo.png" alt="logo" className={style['logo']} />
          <div className={style['categories']}>
            {HeaderCategories.map((category, idx) => {
              return (
                <div
                  key={category.name + idx}
                  className={
                    category.name === focusName
                      ? `${style['category']} ${style['focus']}`
                      : style['category']
                  }
                  onMouseOver={() => {
                    setIsHeaderOpen(true);
                    setFocusName(category.name);
                  }}
                  /*                 onMouseLeave={() => {
                  setIsHeaderOpen(false);
                  setFocusName('');
                }} */
                >
                  <HeaderCategory
                    category={category}
                    onClick={() => {}}
                    onHover={() => {}}
                  />
                </div>
              );
            })}
          </div>
          <div className={style['right-header']}>
            <div className={style['search']}>
              <img src="/images/search.png" alt="search" />
            </div>
            <div className={style['burger']}>
              <img src="/images/burger.png" alt="burger" />
            </div>
          </div>
        </div>
      </div>
      {(isBurgerOpen || isHeaderOpen) && (
        <div
          className={style['bottom-header']}
          onMouseLeave={() => {
            if (isHeaderOpen) {
              setIsHeaderOpen(false);
              setFocusName('');
            }
          }}
        >
          <div style={{ width: '180px' }}></div>
          <div className={style['subcategories']}>
            {HeaderCategories.map((category, idx) => {
              return (
                <div
                  className={style['sub-category']}
                  key={idx + category.name}
                >
                  {category.subs.map((sub, idx) => (
                    <div
                      className={style['sub']}
                      key={idx + category.name}
                      onMouseOver={() => {
                        setSubFocusName(sub);
                      }}
                    >
                      <HeaderSubCategory
                        name={sub}
                        isFocused={sub === subFucusName}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div style={{ width: '81px' }}></div>
        </div>
      )}
    </div>
  );
};

export default Header;
