import { createReducer } from '@reduxjs/toolkit'
import constants from './constants';
import { Statuses } from './../../helpers/constants/loadingStatus';

const initialState = {
    status: Statuses.EMPTY,
}

const login = createReducer(initialState, (builder) => {
    builder
        .addCase(constants.SET_LOGIN_STATUS, (state, action) => {
            state.status = action.payload
        })
});

export default login;
