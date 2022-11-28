import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
     const [isAdmin] = useAdmin(user?.email);
     const [isBuyer] = useBuyer(user?.email);
     const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
    {
    isBuyer &&
    <>
     <li><Link to='/dashboard/addproducts'>My Orders</Link></li> 
     <li><Link to='/dashboard/addproducts'>My Wishlists</Link></li> 
     
     </>
    
    }

{
    isSeller &&
    <>
     <li><Link to='/dashboard/addproducts'>Add A Car to sell</Link></li>  
     <li><Link to='/dashboard/addproducts'>My Products</Link></li> 
     <li><Link to='/dashboard'>My Buyer</Link></li> 
    
    </>
    }


{
    isAdmin && 
 <>
    <li><Link to='/dashboard/allusers'>All Users</Link></li>
    <li><Link to='/dashboard/allproducts'>All Cars</Link></li>
    <li><Link to='/dashboard/allproducts'>All Reported Cars</Link></li>
 </>
}

                    </ul>

                </div>
            </div>
            <Footer> </Footer>
        </div>
    );
};

export default DashboardLayout;