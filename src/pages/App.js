import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

// my components & data
import Nav from '../sections/Nav'
import Header from '../sections/Header'
import Reviews from '../sections/Reviews'
import ProductGallery from '../sections/ProductGallery'
import Footer from '../sections/Footer'
import About from "./About"
import ProductPage from "./ProductPage"
// static files
import '../static/sass/App.sass'
import MyAccount from "./MyAccount"

// TODO: shoppppppppppppppppppppppppppppppping carttttttttttttttttttttttttttttttttttttttttttt

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:index" element={<ProductPage />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <ProductGallery
        title="Check the latest drop"
        tag="latest"
      />
      <ProductGallery
        title="Dream Chase"
        tag="dream"
      />
      <ProductGallery 
        title="COLL NUMO 1"
        tag="coll"
      />
      <Reviews />
      <div className="in-my-clocal">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Share yours</h2>
            </div>
            <div className="col">
              <h2>Tag us and #inmyclocal</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4"></div>
            <div className="col-xl-4"></div>
            <div className="col-xl-4"></div>
          </div>
        </div>
      </div>
      <hr />
      <ProductGallery
        title="All Products"
        tag="all"
      />
      <hr />
      <Footer />
    </div>
  )
}

export default App;
