import { useEffect, useState } from "react";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

export default function ShoppingItem({ productItem }) {
  const [quantity, setQuantity] = useState(0);
  const { itemsInCart, setItemsInCart } = useContext(DataContext);

  function handleQuantityPlus() {
    if (quantity < 5) {
      setQuantity(quantity + 1);
      setItemsInCart({
        ...itemsInCart,
        [productItem.id]: { quantity: quantity + 1, productItem: productItem },
      });
    }
  }

  function handleQuantityMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setItemsInCart({
        ...itemsInCart,
        [productItem.id]: { quantity: quantity - 1, productItem: productItem },
      });
    }

    // "empty" is a placeholder this syntax requires something there otherwise it gives an error
    if (quantity - 1 === 0) {
      const { [productItem.id]: empty, ...newobj } = itemsInCart;
      setItemsInCart(newobj);
    }
  }

  useEffect(() => {
    if (itemsInCart[productItem.id])
      setQuantity(itemsInCart[productItem.id].quantity);
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
