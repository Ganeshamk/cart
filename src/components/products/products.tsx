import React from 'react';
import './products.css';
import ProductsList from '../product-list/product-list';

const Products = ({ searcProducts, products, setProducts }: any) => {
    return (
        <>
            {
                searcProducts && searcProducts.length > 0 ?
                    <div className="products-block mt-2 mb-5">
                        <ProductsList searcProducts={searcProducts} products={products} setProducts={setProducts} />
                    </div> :
                    <div className="col-12 pt-5 pb-5 m-0 p-0">
                        <label className="col-12 text-center">No Data Found</label>
                    </div>
            }
        </>
    );
};

export default Products;
