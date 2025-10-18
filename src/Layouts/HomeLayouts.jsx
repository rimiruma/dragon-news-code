import { Outlet } from "react-router";
import Headers from "../components/Headers";

const HomeLayouts = () => {
    return (
        <div>
            <Headers></Headers>
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