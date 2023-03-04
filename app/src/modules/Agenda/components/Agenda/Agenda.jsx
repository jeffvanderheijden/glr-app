import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AgendaView from './AgendaView';

const Agenda = () => {
    const location = useLocation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={location.pathname}
        >
            <AgendaView />
        </motion.div>
    )
}

export default Agenda;