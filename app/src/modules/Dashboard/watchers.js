import { takeLatest } from 'redux-saga/effects';
import constants from './constants';

import { getAirflowData } from './sagas/getAirflowData';
import { getCustomerData } from './sagas/getCustomerData';

const dashboard = function* () {
    yield takeLatest(constants.GET_AIRFLOW_DATA, getAirflowData);
    yield takeLatest(constants.GET_CUSTOMER_DATA, getCustomerData);
}

export default dashboard;