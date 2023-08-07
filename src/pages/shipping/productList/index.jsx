import './index.css'
function ProductList({ products, addToCart }) {

  return (
    <ul className="productList">
      {
        products?.map((product) => (
          <li key={product?.name} className="card">
            <div className="img">
              <img src={product.imgUrl} alt="" />
            </div>
            <div className="item-info">
              <div className="item-info-left">{product.name}</div>
              <div className="item-info-right">
                <div className="price">{product.price}</div>
                <button onClick={() => addToCart(product)}>加入购物车</button>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default ProductList
