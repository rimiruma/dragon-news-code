import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";

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
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch("/news.json")
    },
    {
        path: '/*',
        element: <h2>Not Fount</h2>
    }
]);

export default router;