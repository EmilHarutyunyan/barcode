import React, {useEffect, useState} from 'react';
import ProductServices from "../../API/ProductServices";

const ProductInfo2 = ({productId2}) => {
    const [product, setProduct] = useState(null)

    useEffect(async () => {
        const response = await ProductServices.getProductCompareParent(productId2)
        response.data.results[0].time = new Date(response.data.results[0].time).toLocaleDateString();
        setProduct(response.data.results[0])
    }, [])

    return (
        <div className='product_info_compare'>
            <h2>product {product?.name}</h2>
            <div className='detail_compare'>
                <div className='info'>
                    <label>Part barcode</label>
                    <p>1234</p>
                </div>
                <div className='info'>
                    <label>Part price</label>
                    <p>$ {product?.partPrice}</p>
                </div>
                <div className='info'>
                    <label>Connections</label>
                    <p>356</p>
                </div>
                <div className='info'>
                    <label>usage</label>
                    <p>{product?.usage}</p>
                </div>
                <div className='info'>
                    <label>Part serial number</label>
                    <p>{product?.serialNumber}</p>
                </div>
                <div className='info'>
                    <label>Time stamp</label>
                    <p>{product?.time}</p>
                </div>
                <div className='info'>
                    <label>Part count</label>
                    <p>{product?.partCount}</p>
                </div>
                <div className='info'>
                    <label>Employee name or ID </label>
                    <p>{product?.employeeName}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo2;
