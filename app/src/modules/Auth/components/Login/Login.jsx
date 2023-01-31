import React, { useState } from 'react';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import LoginView from './LoginView';

const Login = () => {
    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.login.status);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitForm = () => {
        dispatch(actions.tryLoginAuth({email, password}));
    }
    return (
        <LoginView 
            setEmail={setEmail}
            setPassword={setPassword}
            submitForm={submitForm}
            loginStatus={loginStatus}
        />
    )
}

export default Login;