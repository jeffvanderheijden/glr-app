import { createAction } from '@reduxjs/toolkit';
import constants from './constants';

const actions = {
    setLoginStatus: createAction(constants.SET_LOGIN_STATUS)
}

export default actions;