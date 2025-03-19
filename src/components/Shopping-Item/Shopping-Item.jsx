import { useEffect, useState } from "react";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

export default function ShoppingItem({ productItem }) {
  const [quantity, setQuantity] = useState(0);
  const { itemsInCart, setItemsInCart } = useContext(DataContext);

  function handleQuantityPlus() {
    if (quantity < 5) {
      setQuantity(quantity + 1);
      setItemsInCart({ ...itemsInCart, [productItem.id]: quantity + 1 });
    }
  }

  function handleQuantityMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setItemsInCart({ ...itemsInCart, [productItem.id]: quantity - 1 });
    }
  }

  useEffect(() => {
    if (itemsInCart[productItem.id]) setQuantity(itemsInCart[productItem.id]);
  }, []);

  return (
    <li>
      <img src={productItem.image} alt="" />
      <div>
        <p>{productItem.title}</p>
        <p>{productItem.price}</p>
        <button onClick={handleQuantityPlus}></button>
        <p>{quantity}</p>
        <button onClick={handleQuantityMinus}></button>
      </div>
    </li>
  );
}
