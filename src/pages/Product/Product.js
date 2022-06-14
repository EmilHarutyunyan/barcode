import React from 'react';
import {Outlet} from "react-router-dom";
import './Product.css';
const Product = () => {
    return (
        <div className="product__wrapper">
            <Outlet/>
        </div>
    );
};

export default Product;