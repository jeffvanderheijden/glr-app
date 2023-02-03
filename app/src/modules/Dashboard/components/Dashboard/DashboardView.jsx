import React from 'react';
import styles from './DashboardView.module.scss';
import SideNav from '../../../../helpers/navigation/SideNav';

const DashboardView = () => {
    

    return (
        <div className={styles.dashboard}>
            <div className="grid grid-cols-10 h-screen">
                <div className="col-span-2 bg-gray-800">
                    <div className="flex items-center w-full h-20 px-10">
                        Logo
                    </div>
                    <SideNav />
                </div>
                <div className="col-span-8 bg-gray-100">
                    <div className="flex items-center w-full border-b h-20 px-10">
                        DASHBOARD 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardView;