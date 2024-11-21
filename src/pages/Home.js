import { ToggleTheme } from '../components/ToggleTheme';
import MastheadSection from '../components/MastheadSection';
import styles from '../styles/Home.module.css';

function Home() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function scrollToSection() {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionOffset = document.querySelector('.masthead').offsetTop;
    const top = sectionOffset - headerHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <div>
            <button onClick={scrollToTop}>KKwongs's Portfolio</button>
          </div>
          <div className={styles['right-content']}>
            <nav>
              <button onClick={scrollToSection}>About me</button>
              <button>Skills</button>
              <button>Archiving</button>
              <button>Projects</button>
              <button>Career</button>
            </nav>
            <ToggleTheme />
          </div>
        </div>
      </header>

      <div style={{ height: '3000px' }}></div>
      <MastheadSection />
      <div style={{ height: '3000px' }}></div>

      <footer></footer>
    </>
  );
}

export default Home;
