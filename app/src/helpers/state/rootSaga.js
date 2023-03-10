import { all } from 'redux-saga/effects';

import login from './../../modules/Auth/watchers';
import dashboard from './../../modules/Dashboard/watchers';

export function* rootSaga() {
    const combinedWatchers = [
        login,
        dashboard
    ];
    yield all(combinedWatchers.map(v => v()));
}
