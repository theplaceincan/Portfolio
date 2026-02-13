import styles from "../css/navbar.module.css"

export default function Navbar() {
  return (
    <>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Abraha Atsbeha</h1>
        <p className={styles.heroSubtitle}>Software Engineer & Computer Science Student</p>
        <p className={styles.heroDescription}>
          Building scalable web applications and embedded systems at UNLV. Specializing in full-stack development, 
          flight software engineering, and AI-powered tools for real-world impact.
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