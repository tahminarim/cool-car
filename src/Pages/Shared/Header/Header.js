import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/gif.gif'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    const menuItems = <React.Fragment >
        <li ><Link to="/">Home</Link></li>
        <li><Link to="/sellcar">To Sell Car</Link></li>
        <li><Link to="/allcars">To Buy Car</Link></li>
        <li><Link to="/blog">Blog</Link></li>
     
     {
        user?.uid?
        <>
        <li><button onClick={handleLogOut}>SignOut</button></li>
        <li><Link to="/">{user.displayName || user.name}</Link></li>
        
        <li><Link to="/dashboard">DashBoard</Link></li>
        </>
        :
        <>
        {/* <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li> */}
        <li><Link to="/myaccount">MyAccount</Link></li>
        </>
     }
    </React.Fragment>

    return (
        <div className="navbar bg-blue-800 mt-5 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-light  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-blue-800 dropdown-content  mt-3 p-2 shadow bg-blue-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>

                <Link to="/" className="btn btn-ghost normal-case text-5xl text-white ">CoolCar</Link>
            </div>
            <div className="navbar-center hidden text-white lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};


export default Header;