import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { products, slides } from "../data"
import Nav from "../sections/Nav"
import Footer from "../sections/Footer"
import ProductGallery from "../sections/ProductGallery"
import "../static/sass/ProductPage.sass"

export default function ProductPage() {
    
    let { product_id } = useParams()
    
    const [product, setProduct] = useState(null)
    
	useEffect(() => {
        getProduct()
	}, [product_id])
    
    let getProduct = async () => {
        // fetch(`http://localhost:8000/api/products/${product_id}`)
        // .then((res) => res.json())
        // .then((json) => {
            //     setProducts(json)
            // })
        let response = await fetch(`http://127.0.0.1:8000/api/products/${product_id}`)
        let data = await response.json()
        setProduct(data)
    }

    return (
        <h1>Test {product?.name}</h1>
    )
    // return (
    //     <div className="product-page">
    //         <Nav />
    //         <header>
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-6">
    //                         <img src={product.imgUrl} alt="" />
    //                     </div>
    //                     <div className="col-6">
    //                         <div className="text">
    //                             <p className="sale">UP TO - {product.sale} %</p>
    //                             <h2>{product.name}</h2>
    //                             <h3>
    //                                 <span className="line-through">{product.price1} EGP </span>
    //                                 <span className="theme-color">{product.price2} EGP </span>
    //                             </h3>
    //                             <p className="gray">{slides[0].describtion}</p>
    //                             <select>
    //                                 <option value="s">s</option>
    //                                 <option value="m">m</option>
    //                                 <option value="l">l</option>
    //                                 <option value="xl">xl</option>
    //                             </select>
    //                             <p className="gray">Purchase this product now and earn {product.price2} Points!</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </header>
    //         <div className="more">
    //             <ProductGallery
    //                 title="Related products"
    //                 tag="latest"
    //             />
    //         </div>
    //         <Footer />
    //     </div>
    // )
}