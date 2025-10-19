import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: '/auth',
        element: <h2>Authentication Layout</h2>
    },
    {
        path: '/news',
        element: <h2>News Layout</h2>
    },
    {
        path: '/*',
        element: <h2>Not Fount</h2>
    }
]);

export default router;