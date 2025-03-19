import { Link, Outlet } from "react-router-dom";
import "./HeaderNav.css";

export default function HeaderNav() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="header-title">
          Fake Store
        </Link>
        <ul className="list">
          <li>
            <Link to="/shopping" className="nav-link">
              Shopping
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="nav-link">
              Checkout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
