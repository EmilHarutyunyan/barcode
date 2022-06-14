import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {productDispatch} from "../../redux/features/product/ProductSlice";
import {toggleModal} from "../../redux/features/modal/modalSlice";


const Form = () => {




    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (value) => {
        dispatch(productDispatch(value));
        dispatch(toggleModal(true));
    }

    return (
        <form >
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
                       {...register("price", {required: "* Field is required"})}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>
            <div className="input__block">
                <label>Product type</label>
                <input type="text" placeholder="1234" list="partCode"
                       {...register("partCode", {required: "* Field is required"})}
                />
                <datalist id="partCode">
                    <option value="Supersystem (1324)"/>
                    <option value="System (12345)"/>
                    <option value="Subsystem (123456)"/>
                </datalist>
                {errors.name && <span className="error">{errors.name.message}</span>}
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
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="input__block">
                <label>Part serial number</label>
                <input type="text" placeholder="A5678"
                       {...register("serialNumber", {required: "* Field is required"})}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>
            <div className="input__block">
                <label>Time stamp</label>
                <input type="date" placeholder="12.02.2021 15:46"
                       {...register("date", {required: "* Field is required"})}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="input__block">
                <label>Part count</label>
                <input type="text" placeholder="532"
                       {...register("partCount", {required: "* Field is required"})}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="input__block">
                <label>Employee name or ID </label>
                <input type="text"
                       {...register("employeeID", {required: "* Field is required"})}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className='submit'>
                <button className='add' onClick={handleSubmit(onSubmit)}>Save</button>
            </div>
        </form>


    );
};

export default Form;