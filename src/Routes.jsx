import HomePage from "./pages/Home-page";
import ShoppingPage from "./pages/Shopping-page";
import CheckoutPage from "./pages/Checkout-page";
import NotFoundPage from "./pages/NotFoundPage";
import StaticNav from "./components/HeaderAndFooter/StaticNav";

const routes = [
  {
    path: "",
    element: <StaticNav />,
    children: [
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
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
