import React from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { Link } from "react-router-dom";

const Header = ({ searchText, setSearchText }: any) => {
    const searchTextEventHandler = (e: any) => {
        if (e) {
            setSearchText(e.target.value);
        } else {
            setSearchText('');
        }
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            alt=""
                            src="https://www.infrrd.ai/hs-fs/hubfs/Infrrd-Logo-White-Transparent.png?width=200&name=Infrrd-Logo-White-Transparent.png"
                            height="50px"
                            className="d-inline-block align-top"
                        />
                    </Link>
                    <label className="company-name">Shopping Cart</label>
                </Navbar.Brand>

                <Form inline className="d-none d-sm-block search-block">
                    <FormControl value={searchText} type="text" placeholder="Search Products..." className="col-12 mr-2 product-search-box" onChange={searchTextEventHandler} />
                    {
                        searchText ?
                            <span className="clear-icon">
                                <FontAwesomeIcon icon={faTimes} onClick={() => searchTextEventHandler('')} />
                            </span> : ''
                    }
                </Form>

                <div className="spacer"></div>

                <Form inline>
                    <Link to="/cart">
                        <Button variant="outline-info">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </Button>
                    </Link>
                </Form>
            </Navbar>
        </>
    );
};

export default Header;
