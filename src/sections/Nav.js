import logo from '../static/imgs/logo.webp'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="" />
            <form action="">
                <input type="search" name="" id="" placeholder='Search for products...' />
            </form>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="">Inmyclocal</a>
                </li>
                <li>
                    <a href="">Shop</a>
                </li>
                <li>
                    <a href="#footer">Contact Us</a>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
            <div>
                <span><i className="fa-solid fa-bag-shopping"></i></span>
                <Link to="/my-account" style={{color: "#fff"}}>
                    <span><i className="fa-solid fa-user"></i></span>
                </Link>
            </div>
        </nav>
    )
}