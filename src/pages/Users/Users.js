import React, {useEffect, useState} from 'react';
import './Users.css';
import {useNavigate} from 'react-router-dom';
import ProductServices from "../../API/ProductServices";
const Users = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    useEffect(async () => {
        const response = await ProductServices.getUser();
       
        setUser(response.data.results);
    }, [])


    

    return (
        <div className='users__wrapper'>
            <div className='header_users'>
                <h2>Users</h2>
                <button className='add_user-btn' onClick={(e) => {
                    e.preventDefault();
                    navigate('/dashboard/addUsers')
                }}>
                    Add User
                </button>
            </div>

            <div className='users_block'>

                {user && user.map((item, key) => {
                    return  (
                        <div className='users' key={key}>
                            {/*<img className='icon_delete' src="/images/TrashSimple.png" alt=""/>*/}
                            <img style={{borderRadius: '50%'}} src={item.avatar} alt=""/>
                            <h2>{item.name}</h2>
                            {/*<p>JC254789</p>*/}
                        </div>
                    )
                })}

                {/*<div className='users'>*/}
                {/*    <img src="/images/Group.png" alt=""/>*/}
                {/*    <h2>Joe Jonas</h2>*/}
                {/*    <p>JC254789</p>*/}
                {/*</div>*/}
                {/*<div className='users'>*/}
                {/*    <img src="/images/Group.png" alt=""/>*/}
                {/*    <h2>Joe Jonas</h2>*/}
                {/*    <p>JC254789</p>*/}
                {/*</div>*/}
                {/*<div className='users'>*/}
                {/*    <img src="/images/Group.png" alt=""/>*/}
                {/*    <h2>Joe Jonas</h2>*/}
                {/*    <p>JC254789</p>*/}
                {/*</div>*/}
                {/*<div className='users'>*/}
                {/*    <img src="/images/Group.png" alt=""/>*/}
                {/*    <h2>Joe Jonas</h2>*/}
                {/*    <p>JC254789</p>*/}
                {/*</div>*/}
                {/*<div className='users'>*/}
                {/*    <img src="/images/Group.png" alt=""/>*/}
                {/*    <h2>Joe Jonas</h2>*/}
                {/*    <p>JC254789</p>*/}
                {/*</div>*/}
                {/*<div className='users'>*/}
                {/*    <img src="/images/Group.png" alt=""/>*/}
                {/*    <h2>Joe Jonas</h2>*/}
                {/*    <p>JC254789</p>*/}
                {/*</div>*/}
                {/*<div className='users'>*/}
                {/*    <img src="/images/Group.png" alt=""/>*/}
                {/*    <h2>Joe Jonas</h2>*/}
                {/*    <p>JC254789</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Users;
