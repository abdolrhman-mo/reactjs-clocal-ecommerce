import { Link } from "react-router-dom";
import '../static/sass/Product.sass'

function Product({name, imgUrl, sale, price1, price2, index}) {
  index++
  const productLink = "/product/" + index
  return (
    <div className="product">
        <Link to={productLink}>
          <div className="image" style={{backgroundImage: "url(" + imgUrl + ")"}}>
            <p>UP TO - {sale}%</p>
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
          <p><span className='line-through'>{price1}.00 EGP</span> {price2}.00 EGP</p>
          <a href='#hoodie'>
            <i className="fa-regular fa-heart"></i>
            Add to Wishlist
          </a>
        </div>
    </div>
  );
}

export default Product;
