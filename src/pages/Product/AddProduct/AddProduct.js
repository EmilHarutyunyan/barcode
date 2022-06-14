import React from 'react';
import './AddProduct.css';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import { toggleModal} from "../../../redux/features/modal/modalSlice";
import {addProduct} from "../../../redux/features/product/ProductSlice";
const AddProduct = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors },reset  } = useForm();

    const onSubmit = (value) => {
        dispatch(addProduct(value));
        dispatch(toggleModal(true));
        reset()
    }
    
    return (
        <div className='wrapper'>
            <h2>Add product</h2>
            <form className='add-form'>
                <div className="input__block">
                    <label>Part name</label>
                    <input type="text" placeholder="Name here"
                           {...register("name", {required: "* Field is required"})}
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>
                <div className="input__block">
                    <label>Part price</label>
                    <input type="text" placeholder="$"
                           {...register("partPrice",
                               {required: "* Field is required", pattern: {value: /^[0-9]+$/, message:'* Please enter a number'}})
                           }
                    />
                    {errors.price && <span className="error">{errors.price.message}</span>}
                </div>
                <div className="input__block">
                    <label>Product type</label>
                    <input type="number" placeholder="1234" list="partCode"
                           {...register("type", {required: "* Field is required"})}
                    />
                    <datalist id="partCode">
                        <option value="1324" label="Supersystem (1324)"/>
                        <option value="12345" label="System (12345)"/>
                        <option value="123456" label="Subsystem (123456)"/>
                    </datalist>
                    {errors.type && <span className="error">{errors.type.message}</span>}
                </div>
                <div className="input__block">
                    <label>Usage</label>
                    <input type="text" placeholder="Select" list="usage"
                           {...register("usage", {required: "* Field is required"})}
                    />
                    <datalist id="usage">
                        <option value="New"/>
                        <option value="Repaired"/>
                        <option value="Refurbished"/>
                    </datalist>
                    {errors.usage && <span className="error">{errors.usage.message}</span>}
                </div>

                <div className="input__block">
                    <label>Part serial number</label>
                    <input type="text" placeholder="5678"
                           {...register("serialNumber", {required: "* Field is required"})}
                    />
                    {errors.serialNumber && <span className="error">{errors.serialNumber.message}</span>}
                </div>
                <div className="input__block">
                    <label>Time stamp</label>
                    <input type="datetime-local" placeholder="12.02.2021 15:46"
                           {...register("time", {required: "* Field is required"})}
                    />
                    {errors.time && <span className="error">{errors.time.message}</span>}
                </div>

                <div className="input__block">
                    <label>Part count</label>
                    <input type="text" placeholder="532"
                           {...register("partCount",
                               {required: "* Field is required", pattern: {value: /^[0-9]+$/, message:'* Please enter a number'}})}
                    />
                    {errors.partCount && <span className="error">{errors.partCount.message}</span>}
                </div>

                <div className="input__block">
                    <label>Employee name or ID </label>
                    <input type="text"
                           {...register("employeeName", {required: "* Field is required"})}
                    />
                    {errors.employeeName && <span className="error">{errors.employeeName.message}</span>}
                </div>
            </form>
            <div className='submit'>
                <button className='add' onClick={handleSubmit(onSubmit)}>ADD</button>
            </div>

        </div>
    );
};

export default AddProduct;