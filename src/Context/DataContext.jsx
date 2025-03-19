import { createContext, useState } from "react";

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [itemsInCart, setItemsInCart] = useState({});

  return (
    <DataContext.Provider
      value={{ products, setProducts, itemsInCart, setItemsInCart }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
