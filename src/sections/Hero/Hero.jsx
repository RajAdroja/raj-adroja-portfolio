import styles from './HeroStyles.module.css'
import heroImg from '../../assets/fotor-20240916235651_X.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import instagramIconLight from '../../assets/instagramLight.png'
import instagramIconDark from '../../assets/instagramDark.png'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const instagramIcon = theme === 'light' ? instagramIconLight : instagramIconDark;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}
             src={heroImg} 
             alt="Profile picture of Raj Adroja" 
             />
             <img className={styles.colorMode}
              src={themeIcon} 
              alt="Color mode icon"
              onClick={toggleTheme}
              />
        </div>
        <div className={styles.info}>
            <h1>
                Raj 
                <br />
                Adroja
            </h1>
            <h2>Frontent Developer</h2>
            <span>
                <a href="https://www.instagram.com/raj_adroja6501/" target='_blank'>
                <img src={instagramIcon} alt="Twitter icon" />
                </a>
                <a href="https://x.com/r0adb10ck/" target='_blank'>
                <img src={twitterIcon} alt="Twitter icon" />
                </a>
                
                <a href="https://github.com/RajAdroja/" target='_blank'>
                <img src={githubIcon} alt="Github icon" />
                </a>

                <a href="https://www.linkedin.com/in/raj-d-adroja/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin icon" />
                </a>

            </span>
            <p className={styles.description}>
            Exploring Artificial Intelligence and network engineering
            </p>
            <a href={CV} download>
                <button className="hover">
                Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero;