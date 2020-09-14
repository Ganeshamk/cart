import React from 'react';
import './product-list.css';
import Product from '../product/product';

const ProductList = ({ searchProducts, products, setProducts }: any) => {
    return (
        <>
            <div className="row p-0 m-0 p-md-2">
                {
                    searchProducts && searchProducts.length > 0 && searchProducts.map((product: any) => {
                        return <div key={product.productId} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2 m-0">
                            <Product key={product.productId} products={products} product={product} setProducts={setProducts} />
                        </div>;
                    })
                }
            </div>
        </>
    );
};

export default ProductList;
