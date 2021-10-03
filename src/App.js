import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Cart from "./components/cart";
import Products from "./components/products";

function App() {
  const [useProduct, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);
  const [discountItem, setDiscountItem] = useState([]);
  const [discountValue, setDiscountValue] = useState(0);
  const [currentSale, setCurrentSale] = useState([]);
  console.log(currentSale);
  return (
    <div className="App">
      <header className="App-header">
        <Button
          useProduct={useProduct}
          setDiscountItem={setDiscountItem}
          setDiscountValue={setDiscountValue}
        />
        <Products
          useProduct={discountItem}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          discountValue={discountValue}
        />
        <Cart currentSale={currentSale} discountValue={discountValue} />
      </header>
    </div>
  );
}

export default App;
