import styles from "../css/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.quote}>
        ዮሐንስ 3:16: ኣምላኽሲ ብእኡ ዚኣምን ዘበለ ናይ ዘለኣለም ህይወት ምእንቲ ኺረክብ እምበር፡ ከይጠፍእ፡ ነቲ ሓደ ወዱ ኽሳዕ ዚህብ፡ ንዓለም ኣዝዩ ኣፍቂርዋ እዩ።
      </p>
      <p className={styles.signOff}>© 2026</p>
    </footer>
  );
}