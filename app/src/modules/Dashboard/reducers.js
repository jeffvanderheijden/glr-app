import { createReducer } from '@reduxjs/toolkit'
import constants from './constants';
import { Statuses } from './../../helpers/constants/loadingStatus';

const initialState = {
    status: Statuses.EMPTY,
}

const dashboard = createReducer(initialState, (builder) => {
    builder
        .addCase(constants.SET_DASHBOARD_STATUS, (state, action) => {
            state.status = action.payload
        })
});

export default dashboard;
