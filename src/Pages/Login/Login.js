import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   // const [data, setData] = useState();
const {signIn}= useContext(AuthContext);
const [loginEmail,setLoginEmail]= useState('')
const location=useLocation();
const navigate= useNavigate();
const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log('login data is',data)
        signIn(data.email,data.password).then(result=>{
            const user=result.user;
            console.log(user);
            setLoginEmail(data.email)
            navigate(from, {replace: true})
          })
        .catch(err=> console.log(err))

    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-2'>
                <h2 className='text-4xl text-blue-700 text-center font-bold'> Login</h2>

                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                <div className="divider">OR</div>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: "Email is Required"
                        })} className="input input-bordered w-full max-w-xs" type="text" placeholder="email" />
                        {errors.email && <p className='text-red-600' > {errors.email.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is Required",
                            minLength: { value: 6, message: 'Password must be 6charecters or longer' },

                        })} className="input input-bordered w-full max-w-xs" type="password" placeholder="password" />
                        {errors.password && <p className='text-red-600'> {errors.password.message}</p>}

                    </div>

                    <label className="label">
                        <span className="label-text">Forget Password</span>
                    </label>

                    <input className='btn btn-primary w-full' value="Login" type="submit" />

                </form>

                <p>Are you new?<Link to="/signup" className='text-primary'> Create a new account</Link></p>

            </div>
        </div>
    );
};

export default Login;