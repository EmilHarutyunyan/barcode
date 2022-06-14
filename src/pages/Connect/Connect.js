import React from 'react';
import './Connect.css';
import ConnectScanner from "../../components/ConnectScanner/ConnectScanner";
import ConnectScannerSystem from "../../components/ConnectScanner/ConnectScannerSystem";
import ConnectScannerSubsystem from "../../components/ConnectScanner/ConnectScannerSubsystem";
const Connect = () => {
    return (
        <div className='connect'>
            <ConnectScanner product={'Supersystem'} />
            <ConnectScannerSystem product={'System'} />
            <ConnectScannerSubsystem product={'Subsystem'} />
        </div>
    );
};

export default Connect;