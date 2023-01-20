import { put, call } from 'redux-saga/effects';
import constants from './../constants';

import { latestCustomersGet } from './endpoints/latestCustomers';
import { latestClosedGet } from './endpoints/latestClosed';


const getCustomerData = function* () {
    try {
        const latest = yield call(latestCustomersGet, {});
        const closed = yield call(latestClosedGet, {});

        yield put({type: constants.SET_CUSTOMER_DATA, payload: { latest: latest, closed: closed } });
        
    } catch (err) {
        console.log(err);
    }
}

export { getCustomerData };