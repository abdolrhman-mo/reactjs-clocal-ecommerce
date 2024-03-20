import { useState } from 'react';
import { slides } from '../data'

export default function Header() {
    // const [index, setIndex] = useState(0)
    const index = 1
    let slide = slides[index]
    // setInterval(() => {
    //     if (index < 2) {
    //         setIndex(index + 1)
    //     } else {
    //         setIndex(0)
    //     }
    // }, 5000);
    return (
        <header>
            <div className="slide">
                <div className="container">
                    <div className="bg-image" style={{background: 'url(' + slide.backImg + ')'}}></div>
                    <div className="row">
                        <div className="col">
                            <img src={slide.img} alt="" />
                        </div>
                        <div className="col">
                            <div className="text">
                                <h2>{slide.name}</h2>
                                <p>{slide.describtion}</p>
                                <a href="">Buy Now<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}