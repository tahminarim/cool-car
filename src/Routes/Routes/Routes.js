import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Main from '../../Layout/Main'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login'
import MyAccount from '../../Pages/MyAccount/MyAccount'
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage'
import SignUp from '../../Pages/SignUp/SignUp'



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
        path: '/myaccount',
        element: <MyAccount />,
      },
      {
        path: '/dashboard',
        element:  <Dashboard />
      },
    ],
  },
])

export default router;