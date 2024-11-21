import style from './About.module.scss';

export default function About() {
  const items = [
    { image: '', title: '이름', value: '권기현' },
    { image: '', title: '생년월일', value: '95.10.26' },
    { image: '', title: '주소', value: '경기도 용인시 기흥구' },
    { image: '', title: '연락처', value: '010 6512 5741' },
    { image: '', title: '이메일', value: 'kihyun5741@gmail.com' },
    { image: '', title: '학력', value: '단국대학교 소프트웨어학과' },
  ];

  return (
    <section className={`${style.about} about`}>
      <div className={style.inner}>
        <div className={style.title}>About me</div>
        <ul className={style.info}>
          {items.map((item, index) => (
            <li key={index}>
              <div>{item.image}</div>
              <div>
                <div>{item.title}</div>
                <div>{item.value}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
