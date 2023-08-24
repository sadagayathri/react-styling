import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Userdata from './userdata.tsx';
import JsonData from './JsonData.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  
  children: [
    {
      path:"/userdata",
      element:<Userdata></Userdata>,
    },
    {
      path:"/jsondata",
      element:<JsonData></JsonData>,
    },
    {
      path:"/",
      element:<Userdata></Userdata>,
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
