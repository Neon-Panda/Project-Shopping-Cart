import styles from "./CheckoutItems.module.css";
import IncrementingButtons from "../IncrementingButtons/IncrementingButtons";

export default function CheckoutItems({ productItem }) {
  return (
    <li className={styles.cardItem}>
      <img src={productItem.image} alt="" className={styles.image} />
      <p>{productItem.title}</p>
      <IncrementingButtons productItem={productItem} />
    </li>
  );
}
