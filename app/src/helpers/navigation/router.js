import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PrivateRoute from '../../modules/Auth/components/Auth/PrivateRoute';
import Login from '../../modules/Auth/components/Login/Login';
import Dashboard from '../../modules/Dashboard/components/Dashboard/Dashboard';
import Agenda from '../../modules/Agenda/components/Agenda/Agenda';

const AnimatedRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <Login />
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/agenda" element={
                    <PrivateRoute>
                        <Agenda />
                    </PrivateRoute>
                } />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRouter;