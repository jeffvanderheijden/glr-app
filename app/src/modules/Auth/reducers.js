import { createReducer } from '@reduxjs/toolkit'
import constants from './constants';
import { Statuses } from './../../helpers/constants/loadingStatus';

const initialState = {
    status: Statuses.EMPTY,
    auth: Statuses.EMPTY,
    auth_status: Statuses.EMPTY,
    user: Statuses.EMPTY
}

const login = createReducer(initialState, (builder) => {
    builder
        .addCase(constants.SET_LOGIN_STATUS, (state, action) => {
            state.status = action.payload
        })
        .addCase(constants.SET_USER_AUTH, (state, action) => {
            state.auth = action.payload
        })
        .addCase(constants.SET_AUTH_STATUS, (state, action) => {
            state.auth_status = action.payload
        })
        .addCase(constants.SET_USER, (state, action) => {
            state.user = { ...action.payload }
        })
});

export default login;
