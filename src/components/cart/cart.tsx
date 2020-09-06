import React from 'react';
import './cart.css';
import ProductService from '../services/data.services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Cart = ({ products, setProducts }: any) => {
    let totalAmount = 0;

    const cartData = products.filter((product: any) => {
        return product.quantity > 0;
    });

    const calculateTotalAmount = () => {
        let total = 0;
        products.forEach((product: any) => {
            if (product.quantity > 0) {
                total = total + (product.quantity * product.price);
            }
        });
        totalAmount = total;
    };

    calculateTotalAmount();

    const removeCart = (product: any) => {
        ProductService.removeCart(setProducts, products, product);
    };

    const quantityChange = (type: any, product: any) => {
        ProductService.quantityChange(type, setProducts, products, product);
    };

    return (
        <>
            <div className="col-12 col-sm-11 col-md-10 col-lg-8 col-xl-8 mx-auto mt-5 mb-5">
                {cartData && cartData.length > 0 ?
                    <div className="card" >
                        <div className="card-header page-title my-cart">My Cart ({cartData.length})</div>
                        <div className="card-body p-0 m-0">
                            {
                                cartData.map((item: any) => {
                                    return <div key={item.productId} className="cart-item row p-1 m-0 border-bottom">
                                        <span className="col-12 p-0 m-0 mr-2 text-right">
                                            <span className="cart-remove" onClick={() => removeCart(item)}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </span>
                                        </span>
                                        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 p-1 m-0">
                                            <Link to={`/product-details/${item?.productId}`}>
                                                <div className="product-img-block">
                                                    <img src={item.imgUrl} className="product-cart-img" alt="img" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-9 col-md-6 col-lg-6 col-xl-6 p-1 m-0">
                                            <div className="product-content">
                                                <label className="col-12 p-0 m-0 text-primary"><strong>Name: </strong>{item?.name}</label>
                                                <label className="col-12 p-0 m-0 text-primary"><strong>Price: </strong>{ProductService.currencyFormat(item?.price)}</label>
                                                <label className="col-12 p-0 m-0 text-primary"><strong>Category: </strong><span className="badge badge-success">{item?.category}</span></label>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 p-1 m-0 text-right">
                                            <div className="mr-2 mt-4">
                                                <div className="col-12 p-0 m-0">
                                                    <button className="qty-btn qty-dec" onClick={() => quantityChange('dec', item)}>-</button>
                                                    <span className="product-quantity">{item?.quantity}</span>
                                                    <button className="qty-btn qty-inc" onClick={() => quantityChange('inc', item)}>+</button>
                                                </div>
                                                <div className="col-12 p-0 m-0 mt-2"><strong>{ProductService.currencyFormat(item?.price * item?.quantity)}</strong></div>
                                            </div>
                                        </div>
                                    </div>;
                                })
                            }
                            < div className="total-amount" >
                                <label><strong>Total Amount: <span className="amount">{ProductService.currencyFormat(totalAmount)}</span></strong></label>
                            </div >
                        </div>
                    </div> : <div className="empty">
                        <label> No Cart Data Found</label>
                    </div>
                }
            </div>
        </>
    );
};


export default Cart;
