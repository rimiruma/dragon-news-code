import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";


const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <nav className="w-11/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 mx-auto py-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;