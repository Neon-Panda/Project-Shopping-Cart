import styles from "./Checkout-page.module.css";
import { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";
import CheckoutItems from "../components/CheckoutItems/CheckoutItems";

export default function CheckoutPage() {
  const { itemsInCart, setItemsInCart } = useContext(DataContext);

  const total = Object.keys(itemsInCart).reduce(
    (accu, currentItemID) =>
      itemsInCart[currentItemID].productItem.price *
        itemsInCart[currentItemID].quantity +
      accu,
    0
  );

  return (
    <ul className={styles.list}>
      <p className={styles.total}>
        TOTAL <br /> $ {total}
      </p>
      {Object.keys(itemsInCart).map((itemID) => (
        <CheckoutItems
          productItem={itemsInCart[itemID].productItem}
          key={itemID}
        />
      ))}
    </ul>
  );
}
