import React from 'react';
import styles from './DashboardView.module.scss';

const DashboardView = () => {
    return (
        <div className={styles.dashboard}>
            <div className="grid grid-cols-10 h-screen">
                <div className="col-span-2 border-r">
                    <div className="flex items-center w-full border-b h-20 px-10">
                        Logo
                    </div>
                    <ul className="p-10">
                        <li>Dashboard</li>
                        <li>Agenda</li>
                        <li>Logout</li>
                    </ul>
                </div>
                <div className="col-span-6">
                    <div className="flex items-center w-full border-b h-20 px-10">
                        test 
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

export default DashboardView;