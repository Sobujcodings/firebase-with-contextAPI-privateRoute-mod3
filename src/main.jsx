import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Order from './Components/Orders.jsx';
import Orders from './Components/Orders.jsx';
import PrivateRoute from './Private-route/PrivateRoute.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      
      {
        path: '/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
        // aktai private route baniye tarpor jetake private component banate hoy(mane login chara dhuke jaba nah)
        // shetake tar vhitore/children boshiye dibo (private route compo aktai thabe bakigulo children kore boshao vhitore)
      },

      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
        // order compo k private route banabo tai Private route compo r vhitore orders k
        // rakhlam(children)then baki private routing r kaj korbo <PrivateRoute> r moddhe
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)

// context api r component r vhitore boshabo router provider(shob compo or under e ache) k
// okkkeee newya manei shob compo k newa (then shegulo k shei context compo te children hishebe use korbo)