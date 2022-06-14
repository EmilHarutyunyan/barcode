import React, {useEffect, useState} from 'react';
import './Sidebar.css';
import { useLocation, useNavigate} from "react-router-dom";
import {Button, Menu} from "antd";


import 'antd/dist/antd.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/features/user/UserSlice';



const items = [
    { key: '1', label: 'Product', path: '/dashboard' },
    { key: '2', label: 'Product', path: '/dashboard/allProduct' },
    { key: '3', label: 'Product', path: '/dashboard/compare' },
    { key: '5', label: 'Product', path: '/dashboard/users' },
    { key: '4', label: 'Product', path: '/dashboard/connect' },
    { key: '6', label: 'Product', path: '' },
]


const Sidebar = () => {
    const { SubMenu } = Menu;

    const dispatch = useDispatch()
    
    // const [headerRef,childrenRef, setShowLinks] = useHideShow();

    const [isBurger, setIsBurger] = useState(false)
    // let refUl = React.createRef();
    // const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();
    const [selectedKey, setSelectedKey] = useState(items.filter(_item => location.pathname === _item.path))


    const onClickMenu = (item) => {
        const clicked = items.find(_item => _item.key === item.key)
        setSelectedKey(item?.key)
        navigate(clicked.path)
    }
   


    // useEffect(() => {
    //     setSelectedKey(items.find(_item => location.pathname.startsWith(_item.path)).key)
    // }, [location])
    //
    //
    // useEffect(() => {
    //     console.log(location);
    //     if (location.pathname === '/dashboard/allProduct' || location.pathname === '/dashboard') {
    //         setToggle(true);
    //     } else {
    //         setToggle(false);
    //     }
    // }, [location])
   const [state, setState] = useState(false);
   const  toggleCollapsed = () => {
       setState(!state);
    };

    return (
        // <div className='sidebar'>
        //     <ul className='parent__menu'>
        //        <li onClick={(evt) => {
        //            evt.preventDefault();
        //            setToggle(!toggle)
        //        }}>
        //         Product
        //            {
        //                toggle
        //                     ?
        //                    <ul ref={refUl}>
        //                        <li><Link to='/dashboard/allProduct'>All products</Link></li>
        //                        <li><Link to='/dashboard'>Add product</Link></li>
        //                    </ul>
        //                    : null
        //            }
        //        </li>
        //        <li><Link to='/dashboard/compare'>Compare</Link></li>
        //        <li>Connect</li>
        //        <li><Link to='/dashboard/users'>Users</Link></li>
        //     </ul>
        // </div>
        // <div style={{ width: 256, height: '100vh', position: 'fixed' }}>
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>BARCODE</h3>
                <img src="/images/burgerIcon.png" alt="burger-icon" onClick={() => setIsBurger((show)=> !show)}/>
            </div>

            <div className='list-container' >
                <div className={isBurger ? `list active` : 'list'} >
                    <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 0 }}>
                        {React.createElement(state ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={state}
                        // selectedKeys={[selectedKey]}
                        onClick={onClickMenu}

                    >

                        <SubMenu key="sub1" title='Product'>
                            <Menu.Item key="1"> Add product</Menu.Item>
                            <Menu.Item key="2">All products</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3">
                            Compare
                        </Menu.Item>
                        <Menu.Item key="4">
                            Connect
                        </Menu.Item>
                        <Menu.Item key="5">
                            Users
                        </Menu.Item>
                        <Menu.Item key="6" onClick={()=> dispatch(userLogout())}>
                            Logout
                        </Menu.Item>
                    </Menu>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;