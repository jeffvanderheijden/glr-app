import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from '../../modules/Auth/components/Auth/PrivateRoute';
import Login from '../../modules/Auth/components/Login/Login';
import Dashboard from './../../modules/Dashboard/components/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    },
]);

export default router;