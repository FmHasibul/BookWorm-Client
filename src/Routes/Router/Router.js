import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/LoginRegistration/Login/Login";
import Registration from "../../Pages/LoginRegistration/Registretion/Registration";
import ErrRoute from "../ErrorRoute/ErrRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../../Pages/Home/Home");

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    {
        path: '*',
        element: <ErrRoute />
    }
])

export default Router 