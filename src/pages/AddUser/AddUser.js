import React, {useRef, useState} from 'react';
import './AddUser.css';
import {useForm} from "react-hook-form";
import ProductServices from "../../API/ProductServices";
import {useNavigate} from "react-router-dom";

const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const ref = useRef();
    const navigate = useNavigate();
    const onSubmit = async (value) => {
        value.avatar = file;
        value.role = 'user';
        const response = await ProductServices.addUser(value);
        if (response) {
            navigate('/dashboard/users');
        }
        // console.log(response);
    }
    const uploadHandler = () => ref.current.click();
    const fileUpload = (e) => {
        const file  = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
            setFile(e.target.result);
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className='AddUser'>
            <form className='form_Adduser' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='title_adduser'>Add User</h2>
                <div className={image ? 'img_success img_upload' : 'img_upload'}  onClick={uploadHandler}>
                    {image ? <img className='image_result' src={image} alt=""/> : <p>Upload</p>}
                </div>
                <input type="file" className='file_input' ref={ref} onChange={(e) => fileUpload(e)}/>
                <div className="input__block_user">
                    <input type="text" placeholder="Name"
                           {...register("name", {required: "* Field is required"})}
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>



                <div className="input__block_user">
                    <input type="text" placeholder="Email"
                           {...register("email", {required: "* Field is required"})}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>


                <div className="input__block_user">
                    <input type="password" placeholder="Password"
                           {...register("password", {required: "* Field is required"})}
                    />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </div>

                <button>
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddUser;
