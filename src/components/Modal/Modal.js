import React, {useState} from 'react';
import './Modal.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../../redux/features/modal/modalSlice";
import {selectProduct} from "../../redux/features/product/ProductSlice";
import { useBarcode } from '@createnextapp/react-barcode';
const Modal = () => {

    const dispatch = useDispatch();
    const product = useSelector(selectProduct);
    // console.log('11111111111', product)
    const [barcode] = useState();
    // console.log('0000000000', barcode)
    const { inputRef } = useBarcode({
        value: product?.serialNumber,
        options: {
            background: '#ffffff',
            displayValue: false,
        }
    });


    const downloadBarcode = (e) => {
        e.preventDefault();
        const canvas = document.getElementById("mybarcode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "mybarcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };


    return (
        <div className='modal'>
            <span className='close' onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleModal(false));
            }}>&times;</span>
            <h3>Your barcode is successfully generated</h3>
            <div className='barcode'>
                <canvas id="mybarcode" ref={inputRef} />
            </div>
            <p>This is your barcode.
                <a onClick={(e) => downloadBarcode(e)} style={{margin: 5}}>
                    Click me
                </a>
                 if you want to print</p>
        </div>
    );
};

export default Modal;