import { createAction } from '@reduxjs/toolkit';
import constants from './constants';

const actions = {
    setLoginStatus: createAction(constants.SET_LOGIN_STATUS),
    tryLoginAuth: createAction(constants.TRY_LOGIN_AUTH),
    setUserAuth: createAction(constants.SET_USER_AUTH),
    tryTokenAuth: createAction(constants.TRY_TOKEN_AUTH)
}

export default actions;