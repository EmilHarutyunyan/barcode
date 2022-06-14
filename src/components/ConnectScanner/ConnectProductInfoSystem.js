import React from 'react';
import {useSelector} from "react-redux";
import {selectProduct, selectProductSystem,selectProductSubSystem} from "../../redux/features/product/ProductSlice";
import ProductServices from "../../API/ProductServices";
import { message } from 'antd';

const ConnectProductInfoSystem = () => {

    const products = useSelector(selectProductSystem);
    const parentProducts = useSelector(selectProduct);
    const subSystem = useSelector(selectProductSubSystem);
    const productId = products?.id !== undefined ? products.id : false;
    const subSystemId = subSystem?.id !== undefined ? subSystem.id : false;

    let date = new Date(products?.time).toLocaleDateString();

    const connect = async () => {
        debugger
        if(parentProducts[0].id === productId || parentProducts[0].id === subSystemId || subSystemId  === productId ) {
            message.error('It already exists. Please change');
            return
        }
        if(parentProducts.length > 0) {
            try {
                const response = await ProductServices.connectProduct(products?.id, parentProducts[0].id)
                console.log(response);
                message.success('Connect to Supersystem');
            } catch (error) {
                console.log(error);
                message.error('Try again');
            }
        } else if (parentProducts.length === undefined) {
            message.error('There is no Supersystem');
        }
        
    }

    // console.log('ssssssssssssssssssssssssss', products)

    return (
        <div className='product_info_compare'>
            <div className='header_connect'>
                <h2>{products?.name}</h2>
                <button onClick={connect}>
                    Connect to supersystem
                </button>


            </div>
            <div className='detail_compare'>
                <div className='info'>
                    <label>Part barcode</label>
                    <p>{products?.serialNumber}</p>
                </div>
                <div className='info'>
                    <label>Part price</label>
                    <p>$ {products?.partPrice}</p>
                </div>
                <div className='info'>
                    <label>Connections</label>
                    <p>0</p>
                </div>
                <div className='info'>
                    <label>usage</label>
                    <p>{products?.usage}</p>
                </div>
                <div className='info'>
                    <label>Part serial number</label>
                    <p>{products?.serialNumber}</p>
                </div>
                <div className='info'>
                    <label>Time stamp</label>
                    <p>{date}</p>
                </div>
                <div className='info'>
                    <label>Part count</label>
                    <p>{products?.partCount}</p>
                </div>
                <div className='info'>
                    <label>Employee name or ID </label>
                    <p>{products?.employeeName}</p>
                </div>
            </div>
        </div>
    );
};

export default ConnectProductInfoSystem;
