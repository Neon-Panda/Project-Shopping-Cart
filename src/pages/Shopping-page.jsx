import styles from "./Shopping-page.module.css";
import { useEffect, useState } from "react";
import ShoppingItem from "../components/Shopping-Item/Shopping-Item";
import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function ShoppingPage() {
  const [loading, setLoading] = useState(true);
  const { products, setProducts } = useContext(DataContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function makeCall() {
      const data = await fetch("https://fakestoreapi.com/products");
      const jsonData = await data.json();
      setProducts(jsonData);
      setLoading(false);
    }
    makeCall();
  }, []);

  function handleCategory(event) {
    const selectedCategory = event.target.name;
    switch (event.target.checked) {
      case true:
        setCategories([...categories, selectedCategory]);
        break;
      case false:
        setCategories(categories.filter((item) => item !== selectedCategory));
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.shoppingPage}>
      <aside className={styles.sideBar}>
        <div className={styles.inputSection}>
          <label htmlFor="men's clothing">Men's Clothing</label>
          <input
            type="checkbox"
            name="men's clothing"
            id="men's clothing"
            onChange={handleCategory}
          />
        </div>
        <div className={styles.inputSection}>
          <label htmlFor="women's clothing">Women's Clothing</label>
          <input
            type="checkbox"
            name="women's clothing"
            id="women's clothing"
            onChange={handleCategory}
          />
        </div>
        <div className={styles.inputSection}>
          <label htmlFor="jewelery">Jewelery</label>
          <input
            type="checkbox"
            name="jewelery"
            id="jewelery"
            onChange={handleCategory}
          />
        </div>
        <div className={styles.inputSection}>
          <label htmlFor="electronics">Electronics</label>
          <input
            type="checkbox"
            name="electronics"
            id="electronics"
            onChange={handleCategory}
          />
        </div>
      </aside>
      <ul className={styles.shoppingGrid}>
        {loading
          ? "loadding"
          : products.map((productItem) =>
              categories.length === 0 ? (
                <ShoppingItem productItem={productItem} key={productItem.id} />
              ) : (
                categories.includes(productItem.category) && (
                  <ShoppingItem
                    productItem={productItem}
                    key={productItem.id}
                  />
                )
              )
            )}
      </ul>
    </div>
  );
}
