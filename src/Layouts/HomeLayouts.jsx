import { Outlet } from "react-router";
import Headers from "../components/Headers";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

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
            <main className="w-11/12 mx-auto my-5 grid grid-cols-12">
                <aside className="col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <section className="min col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;