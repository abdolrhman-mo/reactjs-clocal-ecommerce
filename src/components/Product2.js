import { Link } from "react-router-dom"
import '../static/sass/Product2.sass'

function Product({name, imgUrl, sale, price1, price2, index}) {
  index++
  const productLink = "/product/" + index
  return (
    <div className="product">
        <Link to={productLink}>
          <div className="image" style={{backgroundImage: "url(" + imgUrl + ")"}}></div>
          <div className="text">
              <h3>{ name }</h3>
              <p>{price2}.00 EGP</p>
              <Link className="cta" to={productLink}>مشاهدة المنتج</Link>
          </div>
        </Link>
    </div>
  );
}

export default Product;
