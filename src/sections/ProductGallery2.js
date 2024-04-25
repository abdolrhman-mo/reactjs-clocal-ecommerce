import React from "react";


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
			DataisLoaded: false,
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		// fetch("https://jsonplaceholder.typicode.com/users")
		fetch("http://localhost:8000/api/products")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					products: json,
					DataisLoaded: true,
				});
			});
	}
	render() {
		const { DataisLoaded, products } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Pleses wait some time.... </h1>
				</div>
			);

		return (
			<div className="product-gallery">
				<div className="container">
                    <h1 className="geeks">GeeksforGeeks</h1>
                    <h2>Fetch data from an api in react</h2>
					{products.map((product) => (
						<div className="product">
							<ol key={product.id}>
								<div>
									<strong>
										{"Name: "}
									</strong>
									{product.name},
								</div>
							</ol>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
