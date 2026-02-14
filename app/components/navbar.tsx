import styles from "../css/navbar.module.css"

export default function Navbar() {
  return (
    <>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Abraha Atsbeha</h1>
        <p className={styles.heroSubtitle}>Software Engineer & Computer Science Student</p>
        <p className={styles.heroDescription}>
          I am a Computer Science major with a minor in Mathematics at the University of Nevada, Las Vegas.
          <br /><br />
          I build production-ready software systems focused on clarity, reliability, and user experience, with full-stack applications used by medical, financial, and community organizations.
          <br /><br />
          I am involved with RebelSat (UNLV’s CubeSat project), the AWS Cloud Club, Engineers Without Borders, and independent software development.
        </p>
        <div className={styles.ctaLinks}>
          <a href="mailto:aatsbeha35@gmail.com" className={styles.ctaButton}>Get In Touch</a>
          <a href="https://github.com/theplaceincan" className={`${styles.ctaButton} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">View GitHub</a>
          <a href="https://linkedin.com/in/abrahaatsbeha" className={`${styles.ctaButton} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>

      <nav className={styles.quickNav}>
        <a href="#projects" className={styles.navItem}>Projects</a>
        <a href="#experience" className={styles.navItem}>Experience</a>
        <a href="#research" className={styles.navItem}>Research</a>
        <a href="#certificates" className={styles.navItem}>Certificates</a>
        <a href="#education" className={styles.navItem}>Education</a>
      </nav>
    </>
  );
}