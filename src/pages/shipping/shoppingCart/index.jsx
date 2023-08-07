import React, { useState } from 'react';
import './index.css';
import { plus, times } from 'number-precision'

function FloatingWindow({ cartItems, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };

  const buy = () => {
    const sum = cartItems.reduce((preVal, currVal, currentIndex, prices) => {
      const currPrice = times(currVal.price, currVal.quantity)
      return plus(preVal, currPrice);
    }, 0);
    alert(`当前购物车总金额为${sum}`)
  }

  return (
    <div className="floating-window">
      <button onClick={toggleWindow}>购物车</button>
      {isOpen && (
        <ul className="window-content">
          {cartItems?.length > 0 ? (
            <>
              {cartItems?.map((item) => (
                <li key={item.fruitType}>
                  <div className="price">{item.name}</div>
                  <div className="mount">{item.price} * {item.quantity}</div>
                  <button className='btn' onClick={() => removeFromCart(item)}>删除</button>
                </li>
              ))}
              <li>
                <button className='buy' onClick={buy}>购买</button>
              </li>
            </>
          ) : '暂无数据'}
        </ul>
      )}
    </div>
  );
}

export default FloatingWindow;
