import React, {useEffect, useState} from 'react';
import ScannerCamera2 from "./ScannerCamera2";
import ProductInfo2 from "./ProductInfo2";
import './Scanner.css'
import ProductServices from "../../API/ProductServices";

const Scanner2 = ({product, disable, parentId, setMessage}) => {
    const [flagInfo2, setFlagInfo2] = useState(true);
    const [result2, setResult2] = useState(null);
    const [flagScan2, setFlagScan2] = useState(false);
    const [flagProduct2, setFlagProduct2] = useState(false);
    const [productId2, setProductId2] = useState('');

    useEffect(async () => {
        if (result2?.codeResult?.code) {
            setProductId2(result2.codeResult.code);
            // console.log('0000000000000000000000', result2.codeResult.code);
            // console.log('111111111111111', parentId);
            const response =  await ProductServices.compareProduct(parentId, result2.codeResult.code);
            // console.log("Response", response);
            setMessage(response.data.message)
            setFlagScan2(false);
            setFlagProduct2(true);
        }
    }, [result2]);

    return (
        <div className='scanner__area'>
            {
                flagInfo2 ?
                    <div className='scanner__start'>
                        <h2>Product {product}</h2>
                        <button disabled={disable} className={disable ? 'disable' : 'button'} onClick={(e) => {
                            e.stopPropagation();
                            setFlagInfo2(false);
                            setFlagScan2(true);
                            setProductId2('');
                        }}>Scan product {product}</button>
                    </div>
                    : null
            }

            {   flagScan2 ?
                <ScannerCamera2 setResult2={setResult2} />
                : null
            }


            { flagProduct2 ? <ProductInfo2 productId2={productId2}/> : null }
        </div>
    );
};

export default Scanner2;
