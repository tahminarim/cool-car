import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'

import Main from '../../Layout/Main'
import Blog from '../../Pages/Blog/Blog'
import Categoris from '../../Pages/Categoris/Categoris'
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts'
import AllProducts from '../../Pages/Dashboard/AllProducts/AllProducts'
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers'
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders'
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts'
import Payment from '../../Pages/Dashboard/Payment/Payment'
import DisplayElectricCar from '../../Pages/DisplayElectricCar/DisplayElectricCar'
import DisplayEssenceCar from '../../Pages/DisplayEssenceCar/DisplayEssenceCar'
import DisplayHybridCar from '../../Pages/DisplayHybridCar/DisplayHybridCar'
import ElectricCars from '../../Pages/ElectricCars/ElectricCars'
import EssenceCar from '../../Pages/EssenceCar/EssenceCar'
//import Categoris from '../../Pages/Dashboard/Categoris/Categoris'
import AllCars from '../../Pages/Home/AllCars/AllCars'
import Home from '../../Pages/Home/Home/Home'
import HybridCars from '../../Pages/HybridCars/HybridCars'
import Login from '../../Pages/Login/Login'
import MyAccount from '../../Pages/MyAccount/MyAccount'
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage'
import SignUp from '../../Pages/SignUp/SignUp'
import AdminRoute from '../AdminRoute/AdminRoute'
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
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/allcars',
        element: <AllCars></AllCars>,
      },
      {
        path: '/sellcar',
        element: <Categoris></Categoris>,
      },
      {
        path: '/electriccar',
        element: <ElectricCars></ElectricCars>,
      },

      {
        path: '/displayelectriccar',
        element: <DisplayElectricCar></DisplayElectricCar>,
      },
      {
        path: '/displayhybridcar',
        element: <DisplayHybridCar></DisplayHybridCar>,
      },
      {
        path: '/displayessencecar',
        element: <DisplayEssenceCar></DisplayEssenceCar>,
      },
      {
        path: '/hybridcar',
        element: <HybridCars></HybridCars>,
      },
      {
        path: '/essencecar',
        element: <EssenceCar></EssenceCar>,
      },


    ],
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,

    children: [

      {
        path: '/dashboard/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/myorders',
        element: <MyOrders></MyOrders>
      },
      {
        path: '/dashboard/myproducts',
        element: <MyProducts></MyProducts>
      },
      {
        path: '/dashboard/addproducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/dashboard/allproducts',
        element: <AllProducts></AllProducts>
      },

      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-tahminarim.vercel.app/bookings/${params.id}`)

      }


    ]
  },
  {
    path: '/myaccount',
    element: <MyAccount></MyAccount>,

    children: [
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