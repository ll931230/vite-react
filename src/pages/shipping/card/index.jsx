import { useState } from 'react'
import './index.css'
function AppCard({ data, onClick, idx }) {
  // const [list, setList] = useState([{ name: 'ts' }])

  const joinCart = () => {
    onClick(idx)
  }
  return (
    <>
      <div className="img">
        <img src={data.imgUrl} alt="" />
      </div>
      <div className="item-info">
        <div className="item-info-left">{data.name}</div>
        <div className="item-info-right">
          <div className="price">{data.price}</div>
          <button onClick={joinCart}>加入购物车</button>
        </div>
      </div>
    </>
  )
}

export default AppCard
