import { createAction } from '@reduxjs/toolkit';
import constants from './constants';

const actions = {
    setLoginStatus: createAction(constants.SET_LOGIN_STATUS),
    tryLoginAuth: createAction(constants.TRY_LOGIN_AUTH),
    setUserAuth: createAction(constants.SET_USER_AUTH),
    setUser: createAction(constants.SET_USER),
    tryTokenAuth: createAction(constants.TRY_TOKEN_AUTH),
    setAuthStatus: createAction(constants.SET_AUTH_STATUS)
}

export default actions;