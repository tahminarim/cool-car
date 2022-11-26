import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'

import Main from '../../Layout/Main'
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts'
import AllProducts from '../../Pages/Dashboard/AllProducts/AllProducts'
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllCars from '../../Pages/Home/AllCars/AllCars'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login'
import MyAccount from '../../Pages/MyAccount/MyAccount'
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage'
import SignUp from '../../Pages/SignUp/SignUp'
import PrivateRoute from '../PrivateRoute/PrivateRoute'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/allcars',
        element: <AllCars></AllCars>,
      },
      {
        path: '/sellcar',
        element: <AddProducts></AddProducts>,
      },
      
     
    ],
  },

  {
    path: '/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    
        children:[

        {
          path: '/dashboard/allusers',
          element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/addproducts',
        element: <AddProducts></AddProducts>
    },
    {
      path: '/dashboard/allproducts',
      element: <AllProducts></AllProducts>
  },
       
        
    ]
},
{
  path: '/myaccount',
  element:<MyAccount></MyAccount>,
  
      children:[
      {
          path: '/myaccount/login',
          element: <Login></Login>
      },
      {
        path: '/myaccount/signup',
        element: <SignUp></SignUp>
    },
     
      
  ]
},







])

export default router;