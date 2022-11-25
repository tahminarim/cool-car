import React, { useContext,useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
 //const [data, setData] = useState("");
  const {createUser,updateUserProfile}=useContext(AuthContext);
  
  const [createdUserEmail,setCreatedUserEmail] = useState('');

  const handleSignUp = data => {
    console.log('data is', data)
    createUser(data.email,data.password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      const userInfo={
        name : data.name,
        email:data.email,
        role:data.role
      }
      updateUserProfile(userInfo)
      .then(()=>{
        saveUser(data.name, data.email,data.role);
        toast.success('Welcome to CarCool ! Your account has created successfully !')
      })
      .catch(err=>console.log(err))
    })
    .catch(err=> console.log(err))

  }

  const signInGoogle= data=>{

  }

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch('http://localhost:1000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            //console.log('save user',data);
            setCreatedUserEmail(email);

        })

}
  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96 p-7'>
        <h2 className='text-xl text-center font-bold'> Sign Up</h2>

        <button className='btn btn-outline w-full' onClick={signInGoogle}>CONTINUE WITH GOOGLE</button>
        <div className="divider">OR</div>
        <form onSubmit={handleSubmit(handleSignUp)}>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input {...register("name")} className="input input-bordered w-full max-w-xs" type="text" placeholder="name" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register("email", {
              required: true
            })} className="input input-bordered w-full max-w-xs" type="email" placeholder="email" />

          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input {...register("password", {
              required: "Password is Required",
              minLength: { value: 6, message: 'Password must be 6charecters or longer' },

            })} className="input input-bordered w-full max-w-xs" type="password" placeholder="password" />
            {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Are You a ?</span>
            </label>

            <select {...register("role", {
              
            })}
            className="select select-primary w-full max-w-xs" placeholder="Are You a ?">
              <option>Buyer</option>
              <option >Seller</option>
              
            </select>

          </div>



          <input className='btn btn-primary w-full' value="Sign Up" type="submit" />
        </form>
<br/>
<br/>
<br/>

        <p>Already have an account <Link to="/login " className='text-primary'>Please Login</Link></p>



      </div>
    </div>
  );
};

export default SignUp;