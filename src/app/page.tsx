'use client';

import { useState } from 'react';
import style from '../app/styles/pages/main/main.module.scss';
import Box from './components/pages/Box';
import Button from './components/pages/Button';

export type ProductButton = 'premium' | 'pen' | 'marker' | 'note';

export default function Home() {
  const [clickedButton, setIsClickedButton] =
    useState<ProductButton>('premium');

  return (
    <div className={style['container']}>
      <section className={style['num1']}>
        <img
          src="/images/sample1.jpg"
          alt="main"
          className={style['main-img']}
        />
        <div className={style['comment']}>
          <h1>
            어쩌면 삶은
            <br /> 인생이라는 종이 위에 <br />써 내려가는 <br />
            펜의 기록 같습니다.
          </h1>
          <p>
            그중에서도 지우고 싶지 않은 기록이 있습니다.
            <br />
            모나미는 언제나 당신의 행복한 기록과 함께 합니다.
          </p>
        </div>
      </section>
      <section className={style['num2']}>
        <div className={style['top']}>
          <div className={style['comment-box']}>
            <div className={style['comment']}>
              <h3>
                NEW
                <br />
                ARRIVALS
              </h3>
              <img src="/images/line.png" alt="line" />
              <p>가장 먼저 만나는 설레는 기다림</p>
            </div>
            <Box
              mainText="FX ZETA C3"
              subText="PEN"
              onClick={() => {}}
              order="first"
              img="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1699945409grwui60w6u.jpg"
            />
          </div>
          <Box
            mainText="지퀀스"
            subText="NOTE"
            onClick={() => {}}
            order="sec"
            img="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_169994521784nzg4whv7.jpg"
          />
        </div>
        <div className={style['bottom']}>
          <Box
            mainText="프러스펜3000프라임"
            subText="PREMIUM PEN"
            onClick={() => {}}
            order="third"
            img="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1715318030bhfwnjum09.jpg"
          />
          <Box
            mainText="153 아이디 만년필"
            subText="FOUNTAIN PEN"
            onClick={() => {}}
            order="fourth"
            img="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1681087061mb8i5l6zdx.jpg"
          />
          <Box
            mainText="프러스펜 3000"
            subText="WATER-BASED MARKER"
            onClick={() => {}}
            order="fifth"
            img="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1715319042z7nuju2l3p.jpg"
          />
        </div>
      </section>
      <section className={style['num3']}>
        <div className={style['title']}>
          <h3>BEST PRODUCT</h3>
          <img src="/images/line.png" alt="line" />
          <p>언제 어디서나 생활속에 함께하는 모나미</p>
        </div>
        <div className={style['categories']}>
          <Button
            text="프리미엄 펜"
            isClicked={clickedButton === 'premium'}
            setIsClicked={setIsClickedButton}
            type="premium"
          />
          <Button
            text="펜·펜슬"
            isClicked={clickedButton === 'pen'}
            setIsClicked={setIsClickedButton}
            type="pen"
          />
          <Button
            text="마카·컬러링"
            isClicked={clickedButton === 'marker'}
            setIsClicked={setIsClickedButton}
            type="marker"
          />
          <Button
            text="노트·사무용품"
            isClicked={clickedButton === 'note'}
            setIsClicked={setIsClickedButton}
            type="note"
          />
        </div>
        <div className={style['items']}></div>
      </section>
      <footer></footer>
    </div>
  );
}
