import React, {useEffect, useState} from 'react';
import './Scanner.css';
import ProductInfo from "./ProductInfo";
import ScannerCamera from "./ScannerCamera";
const Scanner = ({product, setDisable, setParentId}) => {

    const [flagInfo, setFlagInfo] = useState(true);
    const [result, setResult] = useState(null);
    const [flagScan, setFlagScan] = useState(false);
    const [flagProduct, setFlagProduct] = useState(false);
    const [productId, setProductId] = useState('');

    useEffect(() => {
        if (result?.codeResult?.code) {
            setProductId(result.codeResult.code);
            setParentId(result.codeResult.code);
            // console.log(result.codeResult.code);
            setFlagScan(false);
            setFlagProduct(true);
        }
    }, [result]);

    return (
        <div className='scanner__area'>
            {
                flagInfo ?
                    <div className='scanner__start'>
                        <h2>Product {product}</h2>
                        <button  className="button" onClick={(e) => {
                            e.stopPropagation();
                            setFlagInfo(false);
                            setFlagScan(true);
                            setProductId('');
                        }}>Scan product {product}</button>
                    </div>
                    : null
            }

            {   flagScan ?
                <ScannerCamera setResult={setResult} />
                : null
            }


            { flagProduct ? <ProductInfo productId={productId} setDisable={setDisable}/> : null }
        </div>
    );
};
export default Scanner;
