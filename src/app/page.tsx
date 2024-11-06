import style from '../app/styles/pages/main.module.scss';

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
            <div className={`${style['box']} ${style['first']}`}></div>
          </div>
          <div className={`${style['box']} ${style['sec']}`}></div>
        </div>
        <div className={style['bottom']}>
          <div className={`${style['box']} ${style['third']}`}></div>
          <div className={`${style['box']} ${style['fourth']}`}></div>
          <div className={`${style['box']} ${style['fifth']}`}></div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
