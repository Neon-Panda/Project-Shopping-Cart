import App from "./App";
import HomePage from "./pages/Home-page";
import ShoppingPage from "./pages/Shopping-page";
import CheckoutPage from "./pages/Checkout-page";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shopping",
    element: <ShoppingPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
];

export default routes;
