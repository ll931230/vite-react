// cartIcon.js
import './index.css';

function CartIcon(props) {
  const { itemCount } = props;

  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart"></i>
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
}

export default CartIcon;
