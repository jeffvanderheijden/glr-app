import { createAction } from '@reduxjs/toolkit';
import constants from './constants';

const actions = {
    setDashboardStatus: createAction(constants.SET_DASHBOARD_STATUS)
}

export default actions;