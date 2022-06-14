import React  from 'react';
import { useSelector} from "react-redux";
import { selectProduct} from "../../redux/features/product/ProductSlice";

const ConnectProductInfo = ({product}) => {

    const data = useSelector(selectProduct);
    const products = data[0];
    let date = new Date(products?.time).toLocaleDateString();



    return (
        <div className='product_info_compare'>
            <div className='header_connect'>
                <h2>{products?.name}</h2>
                {/*{*/}
                {/*    product === 'System' ?*/}
                {/*        <button>*/}
                {/*            Connect to supersystem*/}
                {/*        </button> :  product === 'Subsystem' ?   <button>*/}
                {/*            Connect to system*/}
                {/*        </button>: null*/}
                {/*}*/}


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

export default ConnectProductInfo;