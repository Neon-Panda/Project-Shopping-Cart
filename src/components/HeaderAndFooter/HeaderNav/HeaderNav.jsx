import { Link, Outlet } from "react-router-dom";
export default function HeaderNav() {
  return (
    <>
      <header>
        <p>HELlllllooooo HEADER HERE</p>
        <Link to="/shopping">Shopping Page</Link>
        <br />
        <Link to="/">Home Page</Link>
        <br />
        <Link to="/checkout">Checkout Page</Link>
      </header>
    </>
  );
}
