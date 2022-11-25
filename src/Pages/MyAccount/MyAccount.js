import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Login from '../Login/Login';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
//import SignUp from '../SignUp/SignUp';

const MyAccount = () => {
    return (
        <div>





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