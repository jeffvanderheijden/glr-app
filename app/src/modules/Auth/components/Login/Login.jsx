import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import LoginView from './LoginView';
import { Statuses } from './../../../../helpers/constants/loadingStatus';

const Login = () => {
    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.login.status);
    const auth = useSelector(state => state.login.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {
        dispatch(actions.tryLoginAuth({email, password}));
    }
    return (
        <>
            {(loginStatus === Statuses.DONE && auth !== false) ? (
                <Navigate to="/dashboard" replace={true} />
            ) : (
                <LoginView 
                    setEmail={setEmail}
                    setPassword={setPassword}
                    submitForm={submitForm}
                    loginStatus={loginStatus}
                />
            )}
        </>
    )
}

export default Login;