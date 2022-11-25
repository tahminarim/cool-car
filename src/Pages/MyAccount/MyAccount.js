import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Login from '../Login/Login';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
//import SignUp from '../SignUp/SignUp';

const MyAccount = () => {
    return (
        <div>


{/* <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
      
          <li><Link to='/login'> To log in </Link></li>
          <li><Link to='/signup'> To create an account </Link></li>
        </ul>
      </div>
    </div>
    <Login></Login>
 
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100">
      
    
      <li><Link to='/login'> To log in </Link></li>
          <li><Link to='/signup'> To create an account </Link></li>
      
    </ul>
    
  </div>
</div> */}



<div>
            <Header></Header>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className=" menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/myaccount/login'><button className='btn btn-outline btn-primary btn-wide'>To Login</button></Link></li>

                        <li><Link to='/myaccount/signup'><button className='btn btn-outline btn-primary btn-wide'>Create an Account</button></Link></li>
                     

                    </ul>

                </div>
            </div>
            <Footer> </Footer>
        </div>

        </div>
    );
};

export default MyAccount;