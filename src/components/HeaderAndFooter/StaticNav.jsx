import styles from "./StaticNav.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
export default function StaticNav() {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <Outlet />
      <Footer />
    </div>
  );
}
