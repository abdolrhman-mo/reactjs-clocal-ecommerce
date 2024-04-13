import logo from '../static/imgs/logo.webp'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col">
                        <h2>
                            Obsessoin with <br />
                            Details
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Showrooms</h4>
                        <a>
                            COMA — <br />
                            30 Mohammed Kamel Al Harouni, Al Manteqah as Sadesah, Nasr City, Cairo Governorate
                        </a>
                        <hr />
                        <a>
                            LOCO — <br />
                            Street 15, Waha, Nasr City, Cairo Governorate 11765
                        </a>
                        <hr />
                        <a>
                            DOMANZA — <br />
                            Zahraa Al Maadi, Maadi as Sarayat Al Gharbeyah, El Basatin, Cairo Governorate
                        </a>
                        <hr />
                        <a>
                            CLICKIN — <br />
                            Ammar ebn yasser, El Sheikh Zayed, Ismailia 3, Ismailia Governorate
                        </a>
                    </div>
                    <div className="col">
                        <h4>Say Hello</h4>
                        <a href="mailto:contact@clocal.co">contact@clocal.co</a>
                        <hr />
                        <a href="tel:++20 107 012 3733">+20 107 012 3733</a>
                        <hr />
                        <h4>Have a problem?</h4>
                        <a href="mailto:support@clocal.co">support@clocal.co</a>
                    </div>
                    <div className="col">
                        <h4>Socials</h4>
                        <a href=""><i className="fa-brands fa-tiktok"></i> Tiktok</a>
                        <a href=""><i className="fa-brands fa-instagram"></i> Instagram</a>
                        <a href=""><i className="fa-brands fa-facebook-f"></i> Facebook</a>
                    </div>
                    <div className="col">
                        <h4>Our Policies</h4>
                        <a href="">Shipping & Return</a>
                        <hr />
                        <a href="">Refund Terms</a>
                        <hr />
                        <a href="">Newsletter</a>
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="submit" value="Subscribe" />
                    </div>
                </div>
                <hr />
                <p>Copyright Clocal © 2024. All Rights Reserved.</p>
            </div>
        </footer>
    )
}