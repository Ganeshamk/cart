import React from 'react';
import './product-details.css';
import ProductService from '../services/data.services';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";

const ProductDetails = ({ products, setProducts }: any) => {

    // const search = useLocation().search;
    // const name = new URLSearchParams(search).get('name');

    let { id } = useParams();

    const productDetails = products.filter((product: any) => {
        return product.productId === id;
    })[0];

    const addToCart = () => {
        ProductService.addToCart(setProducts, products, productDetails);
    };

    const quantityChange = (type: any) => {
        ProductService.quantityChange(type, setProducts, products, productDetails);
    };

    return (
        <>
            <div className="col-12 col-sm-11 col-md-10 col-lg-8 col-xl-8 mx-auto mt-5 mb-5">
                <div className="card product-details-card">
                    <div className="card-header text-warning text-center"><strong>Product Details</strong></div>
                    <div className="card-body">
                        <div className="row p-0 m-0">
                            <div className="col">
                                <div className="col-12 p-0 m-0 text-center product-details-img-block">
                                    <img className="product-img" alt="img" src={productDetails.imgUrl} />
                                </div>
                            </div>

                            <div className="col">
                                <label className="col-12 p-0 m-0 text-primary"><strong>Name: </strong>{productDetails.name}</label>
                                <label className="col-12 p-0 m-0 text-primary"><strong>Price: </strong>{ProductService.currencyFormat(productDetails.price)}</label>
                                <label className="col-12 p-0 m-0 text-primary"><strong>Category: </strong>{productDetails.category}</label>

                                {
                                    productDetails.quantity > 0 ?
                                        <>
                                            <div className="product-qty mt-2 mb-2">
                                                <button className="qty-btn qty-dec" onClick={() => quantityChange('dec')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <span className="product-quantity">{productDetails.quantity}</span>
                                                <button className="qty-btn qty-inc" onClick={() => quantityChange('inc')}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                            <div className="col-12 p-0 m-0">
                                                <label >
                                                    <strong>Total Aomunt:</strong>
                                                    <span className="text-success">
                                                        {ProductService.currencyFormat(productDetails.quantity * productDetails.price)}
                                                    </span>
                                                </label>
                                            </div >
                                        </> :
                                        <button className="add-to-cart mt-2" onClick={addToCart}>Add to Cart</button>
                                }

                                <Link to="/cart">
                                    <button className="goto-cart">Goto Cart</button >
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
