import Masthead from '../components/Masthead';
import About from '../components/About';
import { ToggleTheme } from '../components/Theme';
import styles from './Home.module.scss';

function Home() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function scrollToSection(section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionOffset = document.querySelector(`.${section}`).offsetTop;
    const top = sectionOffset - headerHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  }
  return (
    <>
      <header className={`${styles.header} header`}>
        <div className={styles['header-container']}>
          <div>
            <button onClick={scrollToTop}>KKwongs's Portfolio</button>
          </div>
          <div className={styles['right-content']}>
            <nav>
              <button onClick={() => scrollToSection('about')}>About me</button>
              <button>Skills</button>
              <button>Archiving</button>
              <button>Projects</button>
              <button>Career</button>
            </nav>
            <ToggleTheme />
          </div>
        </div>
      </header>

      <Masthead />
      <About />

      <footer></footer>
    </>
  );
}

export default Home;
