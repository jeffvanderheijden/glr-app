import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LoginView from './LoginView';
import { Statuses } from './../../../../helpers/constants/loadingStatus';
import { useEffect } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStatus = useSelector(state => state.login.status);
    const auth = useSelector(state => state.login.auth);
    const authStatus = useSelector(state => state.login.auth_status);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {
        dispatch(actions.tryLoginAuth({email, password}));
    }

    useEffect(() => {
        if (loginStatus === Statuses.ERROR) {
            toast.error("Log in failed. Please check username and password.");
        }

        if(authStatus === Statuses.ERROR) {
            toast.error("Something went wrong. Please make sure you're logged in.");
            dispatch(actions.setAuthStatus(Statuses.EMPTY));
        }

        if (loginStatus === Statuses.DONE && auth !== false) {
            navigate('/dashboard');
        }
    }, [loginStatus, auth, authStatus, navigate, dispatch])
    
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