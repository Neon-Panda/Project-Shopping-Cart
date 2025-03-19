import { useEffect, useState } from "react";
import ShoppingItem from "../components/Shopping-Item/Shopping-Item";
import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function ShoppingPage() {
  const [loading, setLoading] = useState(true);
  const { products, setProducts } = useContext(DataContext);

  useEffect(() => {
    async function makeCall() {
      const data = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();
      setProducts(data);
      setLoading(false);
    }
    makeCall();
  }, []);

  return (
    <div>
      {loading
        ? "loadding"
        : products.map((productItem) => (
            <ShoppingItem productItem={productItem} key={productItem.id} />
          ))}
    </div>
  );
}
