import React from 'react'
import img1 from '/smart-watch1.png'
import  '../Featured/featuredSlider.css'
const Card = () => {
    return (
        <>
            <a
                href="#"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <div className="featured_title">
                    {/* {product.name} */}
                    Headphones
                </div>
                <figure className="featured_img">
                    <img 
                    // src={product.image} 
                    src={img1} 
                    // alt={product.name} 
                    alt="product image" 
                    />
                </figure>
                <h2 className="products_price">
                    <span className="final_price">
                        {/* {product.newPrice} */}
                        49
                    </span> &nbsp;
                    <small>
                        <del className="old_price">
                            {/* {product.oldPrice} */}
                            199
                        </del>
                    </small>
                </h2>
            </a>
        </>
    )
}

export default Card