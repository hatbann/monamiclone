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
      <section></section>
      <footer></footer>
    </div>
  );
}
