import {useState} from 'react';
import ShoppingCart from './shoppingCart';
import mockList from './mockData.jsx'
import ProductList from './productList'
import './index.css'


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.fruitType === product.fruitType);

    if (existingCartItem) {
      const updatedCart = cartItems.map((item) =>
        item.fruitType === product.fruitType ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setCartItemCount(cartItemCount + 1); // 更新购物车数量
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.map((product) =>
      product.fruitType === item.fruitType ? { ...product, quantity: product.quantity - 1 } : product
    ).filter((product) => product.quantity > 0);

    setCartItems(updatedCart);

    setCartItemCount(cartItemCount - 1); // 更新购物车数量
  };

  return (
    <>
      <div className="header">
        <h3>购物天堂</h3>

        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} cartItemCount={cartItemCount} />
      </div>
      <ProductList products={mockList} addToCart={addToCart} />
    </>
  )
}

export default App
