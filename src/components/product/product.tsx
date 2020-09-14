import React from 'react';
import './product.css';
import EllipsisText from "react-ellipsis-text";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductService from '../services/data.services';
import { Link } from "react-router-dom";

const Product = ({ product, products, setProducts }: any) => {

    const addToCart = () => {
        ProductService.addToCart(setProducts, products, product);
    };

    const quantityChange = (type: any) => {
        ProductService.quantityChange(type, setProducts, products, product);
    };

    return (
        <>
            <div className="product-card">
                <Link to={`/product-details/${product?.productId}`}>
                    <div className="product-img-block">
                        <img className="product-img" alt="img" src={product?.imgUrl} width="100%" />
                    </div>
                </Link>
                <div className="card-body p-2">
                    <div className="product-content">
                        <div>
                            <strong>Name</strong>: <EllipsisText text={product?.name} length={15}></EllipsisText>
                        </div>
                        <div>
                            <strong>Price</strong>: {ProductService.currencyFormat(product?.price)}
                        </div>
                        <span className="category-btn">{product?.category}</span>
                    </div>

                    {
                        product?.quantity > 0 ?
                            <div className="product-qty text-right">
                                <button className="qty-btn qty-dec" onClick={() => quantityChange('dec')}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button >
                                <span className="product-quantity" >{product?.quantity}</span>
                                <button className="qty-btn qty-inc" onClick={() => quantityChange('inc')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button >
                            </div > :
                            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button >
                    }
                </div>
            </div >
        </>
    );
};

export default Product;
