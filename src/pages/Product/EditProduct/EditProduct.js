import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import ProductServices from "../../../API/ProductServices";
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';



const EditProduct = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [date, setDate] = useState(null);
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = async (value) => {
       
        const response = await ProductServices.update(id, JSON.stringify(value));
        if(response.status === 200) {
            navigate('/dashboard/allProduct')
        }
       
        // dispatch(addProduct(value));
        // dispatch(toggleModal(true));
    }

    useEffect(async () => {
        const response = await ProductServices.getById(id);
        setDate(new Date(response.data.time))
        setValue("name", response?.data.name);
        setValue("serialNumber", response?.data.serialNumber);
        setValue("type", response?.data.type);
        setValue("partCount", response?.data.partCount);
        setValue("partPrice", response?.data.partPrice);
        setValue("usage", response?.data.usage);
        setValue("time",  new Date(response.data.time).toISOString());
        setValue("employeeName", response?.data.employeeName);
       

    }, []);



    return (
        <div className='wrapper'>
            <h2>Edit product</h2>
            {/*<Form/>*/}
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
                    <input type="date"
                           {...register("time", {required: "* Field is required", valueAsDate: true})}
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
                <button className='add' onClick={handleSubmit(onSubmit)}>Edit</button>
            </div>
        </div>
    );
};

export default EditProduct;
