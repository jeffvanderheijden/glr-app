import { put, call, delay } from 'redux-saga/effects';
import actions from '../actions';
import { Statuses } from '../../../helpers/constants/loadingStatus';
import { userLogin } from '../endpoints/userLogin';

const tryLoginAuth = function* (action) {
    try {
        yield put(actions.setLoginStatus(Statuses.PENDING));
        const requestParams = {
            email: action.payload.email,
            password: action.payload.password
        }
        // Fake delay to show loading state
        yield delay(2000);
        const authReq = yield call(userLogin, requestParams);
        // If unauthorized: error
        if (authReq && authReq.response && authReq.response.status && authReq.response.status === 401) {
            // set error message
            yield put(actions.setLoginStatus(Statuses.ERROR));
        } else {
            // Authorized, set JWT token in state
            yield put(actions.setUserAuth(authReq.token));
            // Also store JWT in localStorage
            localStorage.setItem('glr-jwt', authReq.token);
            yield put(actions.setLoginStatus(Statuses.DONE));
        }
    } catch (err) {
        yield put(actions.setLoginStatus(Statuses.ERROR));
    }
}

export { tryLoginAuth };