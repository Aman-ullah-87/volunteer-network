import { Outlet } from "react-router-dom";
import SideBar from "../pages/Shared/Navbar/SideBar/SideBar";


const AdminLayout = () => {
    return (
        <div className="px-14 py-8 flex">
            <SideBar/>
            
            <div className="px-10 py-2"><Outlet/></div>
        </div>
    );
};

export default AdminLayout;