import React from 'react';
import { Navbar } from 'react-bootstrap';
import './footer.css';

function Footer() {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <div className="col-12 p-2 m-0 text-white text-center">
                    <small>© Copyright 2020 Infrrd Inc. All Rights Reserved.</small>
                </div>
            </Navbar>
        </>
    );
}

export default Footer;
