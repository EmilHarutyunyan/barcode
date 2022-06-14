import React, {useState} from 'react';
import './Compare.css'
import Scanner from "../../components/Scanner/Scanner";
import Scanner2 from "../../components/Scanner/Scanner2";
const Compare = () => {

    const [disable, setDisable] = useState(true);
    const [parentId, setParentId] = useState(null);
    const [message, setMessage] = useState('');


    return (
        <>

            <div className='compare'>

                <div className='scanner_block'>
                    <Scanner product={'Parent'} setDisable={setDisable} setParentId={setParentId}/>
                    <Scanner2 product={'Child'} disable={disable} parentId={parentId} setMessage={setMessage}/>
                </div>
                {message && <h2 className='message'>{message}</h2>}
            </div>
        </>

    );
};

export default Compare;
