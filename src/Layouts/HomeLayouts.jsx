import { Outlet } from "react-router";
import Headers from "../components/Headers";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
    return (
        <div>
            <Headers></Headers>
            <section className="w-11/12 mx-auto my-5">
                <LatestNews></LatestNews>
            </section>
            <nav className="w-11/12 mx-auto my-5">
                <Navbar></Navbar>
            </nav>
            <main>
                <section className="left_nav"></section>
                <section className="min">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayouts;