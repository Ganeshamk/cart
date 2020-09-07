import React from 'react';
import './products.css';
import ProductsList from '../product-list/product-list';
import { Form, FormControl, Accordion, Card, Button } from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Products = ({ sort, setSort, categoriesData, setCategoriesData, setCategories, searchProducts, products, setProducts, searchText, setSearchText }: any) => {

    const searchTextEventHandler = (e: any) => {
        if (e) {
            setSearchText(e.target.value);
        } else {
            setSearchText('');
        }
    };

    const changeCategory = (e: any) => {
        categoriesData.forEach((element: any) => {
            if (element && element.name === e.target.value) {
                element.status = e.target.checked;
            };
        });

        setCategoriesData(categoriesData);

        setCategories(categoriesData.filter((item: any) => {
            return item.status === true;
        }));
    };

    return (
        <>
            <label className="col-12 p-2 m-0 text-primary text-center products-title"><strong>Products</strong></label>

            <div className="col-12 p-2 m-0 d-block d-sm-none search-block">
                <Form inline className="position-relative">
                    <FormControl value={searchText} type="text" placeholder="Search Products here..." className="col-12 mr-2 product-search-box" onChange={searchTextEventHandler} />
                    {
                        searchText ?
                            <span className="clear-icon">
                                <FontAwesomeIcon icon={faTimes} onClick={() => setSearchText('')} />
                            </span> : ''
                    }
                </Form>
            </div>

            {
                searchProducts && searchProducts.length > 0 ?
                    <div className="row p-1 m-0">
                        <div className="col-12 text-right pl-2 pr-2 pt- pb-0 m-0">
                            <Accordion as={Button} className="categories" onClick={() => setSort(sort === 'desc' || sort === '' ? 'asc' : sort === 'asc' ? 'desc' : '')}>
                                SortBy {sort ? <FontAwesomeIcon icon={sort === 'asc' ? faArrowUp : faArrowDown} /> : ''}
                            </Accordion>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 p-2 m-0">
                            <div className="col-12 p-2 m-0 filter-block">
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Card.Header className="p-2 m-0 text-center">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="categories p-0 m-0">
                                                Categories
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="p-0 m-0">
                                                {
                                                    categoriesData.map((category: any) => {
                                                        return <div key={category?.name} className="col-12 category p-2 m-0">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" className="form-check-input"
                                                                    name={category?.name}
                                                                    defaultChecked={category?.status}
                                                                    value={category?.name} onClick={changeCategory} /> {category?.name}
                                                            </label>
                                                        </div>;
                                                    })
                                                }
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9 p-2 m-0">
                            <div className="col-12 p-2 m-0 products-block">
                                <ProductsList searchProducts={searchProducts} products={products} setProducts={setProducts} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-12 pt-5 pb-5 m-0 p-0">
                        <label className="col-12 text-center">No Data Found</label>
                    </div>
            }
        </>
    );
};

export default Products;
