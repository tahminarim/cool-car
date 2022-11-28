import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const date = new Date().toLocaleDateString();
    //console.log(date)
    const { user } = useContext(AuthContext);
    const email = user.email;
    //console.log(user.email)

    const handleAproduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = "https://api.imgbb.com/1/upload?key=6569a70c60136a3bf5bb9aa1deb62fb0"
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        image: imgData.data.url,
                        price: data.price,
                        email: email,
                        condition: data.condition,
                        mobile: data.mobile,
                        location: data.location,
                        description: data.description,
                        purchaseyear: data.purchaseyear,
                        date: data.date,
                        fuel:data.fuel

                    }
                    console.log(product)

                    // save doctor information to the database
                    fetch('https://b612-used-products-resale-server-side-tahminarim.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('final is', data);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/allproducts')
                        })
                }
            })
    }

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Products</h2>
            <form onSubmit={handleSubmit(handleAproduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Car Brand</span></label>
                    <input type="text" {...register("name", {
                        required: "Car Brand is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email")} defaultValue={email}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="number" {...register("price", {
                        required: "this field is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Fuel</span></label>
                    <select
                        {...register('fuel')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Hybrid</option>
                        <option>Electric</option>
                        <option>Essence</option>

                    </select>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile</span></label>
                    <input type="number" {...register("mobile")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "this field is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: "this field is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of Purchase</span></label>
                    <input type="text" {...register("purchaseyear")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Time of post</span></label>
                    <input type="text" {...register("date")} defaultValue={date} className="input input-bordered w-full max-w-xs" />
                </div>

                <input className='btn btn-accent w-full mt-4' value="Add This Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;