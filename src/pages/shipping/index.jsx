import {useState} from 'react';
import FloatingWindow from './FloatingWindow';
import mockList from './mockData.jsx'
import Card from './card'
import './index.css'


function App() {
  const len = mockList?.length
  const initialList = [...Array(len)].map(() => 0);
  const [shippingLists, setShippingLists] = useState(initialList)

  const clickCard = (i) => {
    let itemCount = shippingLists[i]
    const list = initialList.fill(++itemCount, i, i+1)
    setShippingLists([...list])
  }

  return (
    <>
      <div className="header">
        <h3>购物天堂</h3>
        <FloatingWindow data={shippingLists}></FloatingWindow>
      </div>
      <div className="content">
        {mockList?.length > 0 ? (
          mockList?.map((item, i) => (
            <div key={item?.name} className="card">
              <Card data={item} idx={i} onClick={clickCard}></Card>
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
        )}
      </div>
    </>
  )
}

export default App
