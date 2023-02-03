import React from 'react';
import { Link } from "react-router-dom";
import useLogout from '../../../../helpers/hooks/useLogout';
import styles from './AgendaView.module.scss';  

const AgendaView = () => {
    const logout = useLogout();

    return (
        <div className={styles.agenda}>
            <div className="grid grid-cols-10 h-screen">
                <div className="col-span-2 border-r">
                    <div className="flex items-center w-full border-b h-20 px-10">
                        Logo
                    </div>
                    <ul className="p-10">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/agenda">Agenda</Link></li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                </div>
                <div className="col-span-6">
                    <div className="flex items-center w-full border-b h-20 px-10">
                        AGENDA 
                    </div>
                </div>
                <div className="col-span-2 border-l">
                    <div className="flex items-center w-full border-b h-20 px-10">
                        User
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgendaView;