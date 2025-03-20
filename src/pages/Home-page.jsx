import styles from "./Home-page.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the "Fake Store"</h1>
      <p className={styles.paragraph}>Feel free to fake shop here</p>
      <Link to="/shopping" className={styles.shopLink}>
        {" "}
        Shop Now
      </Link>
    </div>
  );
}
