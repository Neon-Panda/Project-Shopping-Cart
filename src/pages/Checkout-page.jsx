import { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";
import ShoppingItem from "../components/Shopping-Item/Shopping-Item";

export default function CheckoutPage() {
  const { itemsInCart, setItemsInCart } = useContext(DataContext);

  return (
    <ul>
      {Object.keys(itemsInCart).map((itemID) => (
        <ShoppingItem
          productItem={itemsInCart[itemID].productItem}
          key={itemID}
        />
      ))}
    </ul>
  );
}
