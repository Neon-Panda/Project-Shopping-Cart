import styles from "./Shopping-Item.module.css";
import IncrementingButtons from "../IncrementingButtons/IncrementingButtons";

export default function ShoppingItem({ productItem }) {
  return (
    <li className={styles.cardItem}>
      <img src={productItem.image} alt="" className={styles.image} />
      <div className={styles.cardContainer}>
        <p className={styles.title}>{productItem.title}</p>
        <IncrementingButtons productItem={productItem} />
      </div>
    </li>
  );
}
