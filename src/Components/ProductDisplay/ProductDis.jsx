import React, { useContext } from 'react';
import './ProductDis.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDis = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    if (!product) return <p>Loading product details...</p>;

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {[1, 2, 3, 4].map((_, index) => (
                        <img key={index} src={product.image} alt={`Thumbnail ${index + 1} of ${product.name}`} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={`Main view of ${product.name}`} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    {[1, 2, 3, 4].map((_, index) => (
                        <img key={index} src={star_icon} alt="Star rating" />
                    ))}
                    <img src={star_dull_icon} alt="Half star rating" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting with a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div key={size}>{size}</div>
                        ))}
                    </div>
                </div>
                <button onClick={() => addToCart && addToCart(product.id)}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDis;
