import { Link, Outlet } from "react-router-dom";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.title}>
          Fake Store
        </Link>
        <ul className={styles.list}>
          <li>
            <Link to="/shopping" className={styles.link}>
              Shopping
            </Link>
          </li>
          <li>
            <Link to="/checkout" className={styles.link}>
              Checkout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
