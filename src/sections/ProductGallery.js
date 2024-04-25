import { useState, useEffect } from 'react'
import Product from '../components/Product'
import '../static/sass/App.sass'


export default function ProductGallery({title, tag}) {

	// this.state = {
	// 	products: [],
	// 	DataisLoaded: false,
	// };

	const [products, setProducts] = useState([])
    
	useEffect(() => {

		fetch("http://localhost:8000/api/products/")
		.then((res) => res.json())
		.then((json) => {
			setProducts(json)
		})
	}, [])

    // if (tag === 'all') {
    //     filtered = products.map(product => product)
    // } else {
    //     filtered = products.filter(product =>
    //         product.tag[0] === tag || product.tag[1] == tag
    //     )
    // }
    const listItems = products.map(product =>
        <div className="col-6">
            <Product 
                name={product.name}
				// href="static/images/{{product.image}}"
                imgUrl={product.img}
                // sale={product.sale}
                price1={product.price1}
                price2={product.price2}
				quantity={product.quantity}
                product_id={product.id}
            />
        </div>
        )
    return (
        <div className="product-gallery">
            <div className="container">
                <h2>{title}</h2>
                <div className="row">
                    {listItems}
                </div>
            </div>
        </div>
    )
}