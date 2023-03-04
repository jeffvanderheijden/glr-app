import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardView from './DashboardView';

const Dashboard = () => {
    const location = useLocation();
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={location.pathname}
        >
            <DashboardView />
        </motion.div>
    )
}

export default Dashboard;