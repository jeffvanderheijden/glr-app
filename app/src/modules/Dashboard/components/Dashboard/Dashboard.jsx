import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DashboardView from './DashboardView';
import actions from '../../actions';
import { Statuses } from './../../../../helpers/constants/loadingStatus';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.setDashboardStatus(Statuses.DONE));
    }, [dispatch]);

    return (
        <DashboardView />
    )
}

export default Dashboard;