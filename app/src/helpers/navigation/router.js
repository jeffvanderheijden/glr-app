import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PrivateRoute from '../../modules/Auth/components/Auth/PrivateRoute';
import Login from '../../modules/Auth/components/Login/Login';
import Dashboard from '../../modules/Dashboard/components/Dashboard/Dashboard';
import Agenda from '../../modules/Agenda/components/Agenda/Agenda';

import SideNav from '../navigation/SideNav';

const AnimatedRouter = () => {
    const location = useLocation();
    const [navSize, setNavSize] = useState('large');

    const toggleNavSize = () => {
        setNavSize(navSize === 'large' ? 'small' : 'large');
    }

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <Login />
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <SideNav 
                            navSize={navSize}
                            toggleNavSize={toggleNavSize}
                        />
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/agenda" element={
                    <PrivateRoute>
                        <SideNav 
                            navSize={navSize}
                            toggleNavSize={toggleNavSize}
                        />
                        <Agenda />
                    </PrivateRoute>
                } />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRouter;