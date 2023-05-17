import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-36">
            <Outlet/>
            </div>
        </div>
    );
};

export default Main;