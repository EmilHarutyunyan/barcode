import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import './Dashboard.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Modal from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {selectModal, toggleModal} from "../../redux/features/modal/modalSlice";


const Dashboard = () => {
    const isModal = useSelector(selectModal);
    const dispatch = useDispatch();

    const data = useSelector((state) => state)
    // console.log(data);
    return (
            <section>
                <Sidebar />

                <Outlet />
                {
                    isModal ?
                        <div className='backdrop' onClick={(e) => {
                            e.preventDefault();
                            dispatch(toggleModal(false))
                        }}>
                            <Modal/>
                        </div>
                        : null
                }
            </section>


    );
};

export default Dashboard;