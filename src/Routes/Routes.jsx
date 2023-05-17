import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Event from "../pages/Event/Event";
import AdminLayout from "../Layouts/AdminLayout";
import VolunteerList from "../pages/VounteerList/VolunteerList";
import AddEvent from "../pages/AddEvent/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      
      
    ],
  },
 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    children:[
        {
            path:'/admin/list',
            element:<VolunteerList/>
        },{
          path:'/admin/addevent',
          element:<AddEvent/>
        }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
