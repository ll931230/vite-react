import React, { useState } from 'react';
import './index.css';
import mockList from "../mockData.jsx";
import Card from "../card/index.jsx";

function FloatingWindow({data}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-window">
      <button onClick={toggleWindow}>购物车</button>
      {isOpen && (
        data?.length > 0 ? (
          data?.map((item, i) => (
            <div key={item?.name} className="card">
              {item}
            </div>
          ))
        ) : (
          <div
            style={{
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            暂无数据
          </div>
        )
      )}
    </div>
  );
}

export default FloatingWindow;
