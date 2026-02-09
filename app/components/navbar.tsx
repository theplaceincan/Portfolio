import styles from "../css/navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Abraha Atsbeha</h1>
      <p className={styles.subHeader}>Computer Science · University of Nevada, Las Vegas</p>
      <div className={styles.links}>
        <a href="mailto:aatsbeha35@gmail.com">Email</a>
        <a href="https://github.com/theplaceincan">GitHub</a>
        <a href="https://linkedin.com/in/abrahaatsbeha">LinkedIn</a>
      </div>
    </header>
  );
}