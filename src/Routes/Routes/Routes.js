import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'

import Main from '../../Layout/Main'
import Dashboard from '../../Pages/Dashboard/Dashboard'
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
    
     
    ],
  },

  {
    path: '/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    
        children:[
        {
            path: '/dashboard',
            element: <PrivateRoute> <Dashboard /></PrivateRoute>
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