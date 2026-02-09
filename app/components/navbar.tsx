import styles from "../css/navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Abraha Atsbeha</h1>
      <p className={styles.subHeader}>Computer Science · University of Nevada, Las Vegas</p>
      <div className={styles.links}>
        <a href="mailto:atsbeha@unlv.nevada.edu">Email</a>
        <a href="https://github.com/atsbeha">GitHub</a>
        <a href="https://linkedin.com/in/atsbeha">LinkedIn</a>
      </div>
    </header>
  );
}