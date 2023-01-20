import { combineReducers } from 'redux';

import login from './../../modules/Login/reducers';
import dashboard from './../../modules/Dashboard/reducers';

const rootReducer = combineReducers({
    login,
    dashboard
});

export default rootReducer;