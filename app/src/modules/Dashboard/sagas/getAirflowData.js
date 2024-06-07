import { put, call } from 'redux-saga/effects';
import constants from './../constants';
import actions from './../actions';
import { Statuses } from './../../../helpers/constants/loadingStatus';
import { airflowCallsGet } from './endpoints/airflowCalls';
import { airflowUsersGet } from './endpoints/airflowUsers';


const getAirflowData = function* () {
    try {
        yield put(actions.setDashboardStatus(Statuses.PENDING));

        const users = yield call(airflowUsersGet, {});
        const calls = yield call(airflowCallsGet, {});

        const airflowData = {
            users: users,
            calls: calls
        }
        
        yield put({type: constants.SET_AIRFLOW_DATA, payload: airflowData});

        yield put(actions.setDashboardStatus(Statuses.DONE));
        
    } catch (err) {
        console.log(err);
        yield put(actions.setDashboardStatus(Statuses.ERROR));
    }
}

export { getAirflowData };