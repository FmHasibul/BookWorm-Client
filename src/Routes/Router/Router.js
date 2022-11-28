import DashboardLayouts from "../../Layouts/DashboardLayouts/DashboardLayouts";
import Dashboard from "../../Pages/AdminRoute/Dashboard/Dashboard";
import Allbuyers from "../../Pages/AdminRoute/Dashboard/ForAdmin/AllBuyers/Allbuyers";
import AllSellers from "../../Pages/AdminRoute/Dashboard/ForAdmin/AllSellers/AllSellers";
import MyOrders from "../../Pages/AdminRoute/Dashboard/ForBuyer/MyOrders/MyOrders";
import AddProducts from "../../Pages/AdminRoute/Dashboard/ForSeller/AddProducts/AddProducts";
import Users from "../../Pages/AdminRoute/Dashboard/Users";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/LoginRegistration/Login/Login";
import Registration from "../../Pages/LoginRegistration/Registretion/Registration";
import Products from "../../Pages/Products/Products";
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
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Products />
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
        path: '/dashboard',
        element: <DashboardLayouts />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/addProducts',
                element: <AddProducts />
            },
            {
                path: '/dashboard/orders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/users',
                element: <Users />
            },
            {
                path: '/dashboard/buyers',
                element: <Allbuyers />
            },
            {
                path: '/dashboard/sellers',
                element: <AllSellers />
            },
        ]
    },
    {
        path: '*',
        element: <ErrRoute />
    }
])

export default Router 