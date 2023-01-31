import { put, call } from 'redux-saga/effects';
import actions from '../actions';
import { Statuses } from '../../../helpers/constants/loadingStatus';
import { tokenAuth } from '../endpoints/tokenAuth';

const tryTokenAuth = function* (action) {
    try {
        yield put(actions.setAuthStatus(Statuses.PENDING));
        const requestParams = { token: action.payload.token };
        const authReq = yield call(tokenAuth, requestParams);
        if(authReq.user) {
            yield put(actions.setUser(authReq.user));
            yield put(actions.setAuthStatus(Statuses.DONE));
        }
        if(authReq.name === 'AxiosError') {
            yield put(actions.setAuthStatus(Statuses.ERROR));
        }
    } catch (err) {
        yield put(actions.setAuthStatus(Statuses.ERROR));
    }
}

export { tryTokenAuth };