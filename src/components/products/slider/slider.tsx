import React from 'react';
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from '../../product/product';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 5
    },
    miniDesktop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 767 },
        items: 3
    },
    miniTablet: {
        breakpoint: { max: 767, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CustomRightArrow = ({ onClick, ...rest }: any) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    return <button className="right-arrow" onClick={() => onClick()} ><FontAwesomeIcon icon={faArrowRight} /> </button>;
};

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    return <button className="left-arrow" onClick={() => onClick()} ><FontAwesomeIcon icon={faArrowLeft} /> </button>;
};

const Slider = ({ products, setProducts }: any) => {
    return (
        <>
            <div className="col-12 p-2 m-0">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    centerMode={true}
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    focusOnSelect={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={'desktop'}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        products && products.length > 0 && products.map((product: any) => {
                            return <div key={product.productId} className="col-12 p-2 m-0">
                                <Product key={product.productId} products={products} product={product} setProducts={setProducts} />
                            </div>;
                        })
                    }
                </Carousel>
            </div>
        </>
    );
};

export default Slider;
