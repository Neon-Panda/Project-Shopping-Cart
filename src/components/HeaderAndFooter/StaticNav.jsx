import HeaderNav from "./HeaderNav/HeaderNav";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
export default function StaticNav() {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <Footer />
    </>
  );
}
