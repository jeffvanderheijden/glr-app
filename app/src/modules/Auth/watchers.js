import { takeLatest } from 'redux-saga/effects';
import constants from './constants';

import { tryLoginAuth } from './sagas/tryLoginAuth';
import { tryTokenAuth } from './sagas/tryTokenAuth';

const login = function* () {
    yield takeLatest(constants.TRY_LOGIN_AUTH, tryLoginAuth);
    yield takeLatest(constants.TRY_TOKEN_AUTH, tryTokenAuth);
}

export default login;