import React, {useEffect, useState} from 'react';
import ScannerCamera from "../Scanner/ScannerCamera";
import {useDispatch} from "react-redux";
import {getProductSubSystem,resProductSubSystem} from "../../redux/features/product/ProductSlice";
import ConnectProductInfoSubsystem from "./ConnectProductInfoSubsystem";
import Spinner from '../Spinner/Spinner';
const ConnectScannerSubsystem = ({product}) => {
    const dispatch = useDispatch();
    const [flagInfoConnect, setFlagInfoConnect] = useState(true);
    const [result, setResult] = useState(null);
    const [flagConnectScan, setConnectScan] = useState(false);
    const [flagProduct, setFlagProduct] = useState(false);
    const [loading, setLoading] = useState(false)
    const [changeProduct, setChangeProduct] = useState(false)
    
    useEffect(()=> {
        
        if(changeProduct === true) {
          setConnectScan(false)
          setResult(null)
          setFlagProduct(false)
          setConnectScan(false)
          setFlagInfoConnect(true)
          setChangeProduct(false)
          dispatch(resProductSubSystem())
          
        }
      },[changeProduct])

    useEffect(() => {
        if (result?.codeResult?.code) {
            // console.log(result.codeResult.code);
            dispatch(getProductSubSystem(result.codeResult.code));
            setConnectScan(false);
            setFlagProduct(true);
        }
    }, [result]);
    return (
        <div className='scanner__area'>
            {
                flagInfoConnect ?
                    <div className='scanner__start'>
                        <h2>{product}</h2>

                        <button className='button'  onClick={(e) => {
                            e.stopPropagation();
                            setFlagInfoConnect(false);
                            setConnectScan(true);
                        }}>Scan product {product}</button>
                    </div>
                    : null
            }

            {   flagConnectScan ?
                <ScannerCamera setResult={setResult} />
                : null
            }


            { flagProduct ? <ConnectProductInfoSubsystem product={product} /> : null }
            {flagProduct ?
        <div className='change-button' >
        <button onClick={()=> setChangeProduct(true)}>Change</button>
      </div> : null}
        </div>
    );
};

export default ConnectScannerSubsystem;
