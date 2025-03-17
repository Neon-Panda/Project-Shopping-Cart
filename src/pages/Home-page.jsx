import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <p>Home Page Example</p>
      <Link to="checkout">Go to Shopping page</Link>
    </div>
  );
}
