import { Link } from "react-router-dom";
import '../static/sass/Product.sass'

function Product({name, imgUrl, sale, price1, price2, product_id, quantity}) {
  const productLink = "/products/" + product_id
  let price_tag = ''
  let label = ''
  if (price2 == null) {
    price_tag = <p>{price1}.00 EGP</p>
  } else {
    price_tag = <p><span className='line-through'>{price1}.00 EGP</span> {price2}.00 EGP</p>
  }
  if (price2 != null) {
    label = <p>UP TO - {(price1 - price2) / price1 * 100}%</p>
  }
  if (quantity == 0) {
    label = <p className="sold-out">SOLD OUT</p>
  }
  return (
    <div className="product">
        <Link to={productLink}>
          <div className="image" style={{backgroundImage: "url(" + imgUrl + ")"}}>
            {label}
            <div>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </Link>
        <div className="text">
          <Link to={productLink}>
            <h3>{ name }</h3>
          </Link>
          {price_tag}
          <a href='#hoodie'>
            <i className="fa-regular fa-heart"></i>
            Add to Wishlist
          </a>
        </div>
    </div>
  );
}

export default Product;
