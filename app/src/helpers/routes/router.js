import { createBrowserRouter } from "react-router-dom";
import Login from './../../modules/Login/components/Login/Login';
import Dashboard from './../../modules/Dashboard/components/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

export default router;