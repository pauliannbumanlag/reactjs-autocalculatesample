import { useState } from 'react';
import './App.css';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10) || 0;
    setQuantity(newQuantity);
    calculateTotalAmount(newQuantity, unitPrice);
  };

  const handleUnitPriceChange = (event) => {
    const newUnitPrice = parseFloat(event.target.value) || 0;
    setUnitPrice(newUnitPrice);
    calculateTotalAmount(quantity, newUnitPrice);
  };

  const calculateTotalAmount = (newQuantity, newUnitPrice) => {
    const newTotalAmount = newQuantity * newUnitPrice;
    setTotalAmount(newTotalAmount);
  };

  return (
    <div>
      <h1>Auto Calculation Form</h1>
      <form>
        <div>
          <label htmlFor='quantity'>Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div>
          <label htmlFor='unitPrice'>Unit Price:</label>
          <input
            type="number"
            id="unitPrice"
            value={unitPrice}
            onChange={handleUnitPriceChange}
          />
        </div>
        <div>
          <label htmlFor='totalAmount'>Total Amount:</label>
          <input type="text" id="totalAmount" value={totalAmount} readOnly/>
        </div>
      </form>
    </div>
  );
}

export default App;
