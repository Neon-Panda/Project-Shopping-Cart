import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function CheckoutPage() {
  const { itemsInCart, products } = useContext(DataContext);

  return (
    <ul>
      {Object.keys(itemsInCart).map((itemID) => (
        <li>
          <p>{products[itemID].title}</p>
          <p>Quantity: {itemsInCart[itemID]}</p>
          <p>$ {products[itemID].price * itemsInCart[itemID]}</p>
          <button>+ 1</button>
          <button>- 1</button>
        </li>
      ))}
    </ul>
  );
}
