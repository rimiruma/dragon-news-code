import { Link, NavLink } from "react-router";
import userImg from '../assets/user.png'
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const {user} = use(AuthContext);

    return (
        <div className="flex justify-between items-center text-accent">
            <div>{user && user.email}</div>
            <div className="nav flex gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img src={userImg} alt="" />
                <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;