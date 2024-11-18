'use client';

import style from '../app/styles/pages/main/main.module.scss';
import Box from './components/pages/Box';

export default function Home() {
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
      <footer></footer>
    </div>
  );
}
