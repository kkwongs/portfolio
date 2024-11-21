import styles from '../styles/Masthead.module.css';

export default function MastheadSection() {
  return (
    <section className={styles.masthead}>
      <div className={styles.inner}>
        <div className={styles.title}>Front-End Developer</div>
        <div className={styles.description}>
          <p>안녕하세요.</p>
          <p>배우는 것과 배운 지식을 적용하는 것을 좋아하는 웹 개발자입니다.</p>
          <p>어떤 일을 하더라도 기본기를 중요하게 생각합니다.</p>
        </div>
      </div>
    </section>
  );
}
