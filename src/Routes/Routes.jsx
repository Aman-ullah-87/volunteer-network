import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layouts/Main";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";


  const router=createBrowserRouter([
     {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<App/>
            }
        ]
     },
     {
        path:'/login',
        element:<Login/>
     }
  ])

  export default router;