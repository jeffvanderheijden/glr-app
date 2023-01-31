import { put, call } from 'redux-saga/effects';
import actions from '../actions';
import { tokenAuth } from '../endpoints/tokenAuth';

const tryTokenAuth = function* (action) {
    try {
        const requestParams = { ...action.payload.token }
        const authReq = yield call(tokenAuth, requestParams);
        console.log(authReq);
    } catch (err) {
        console.log(err);
    }
}

export { tryTokenAuth };