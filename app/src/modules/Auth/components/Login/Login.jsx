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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {
        dispatch(actions.tryLoginAuth({email, password}));
    }

    useEffect(() => {
        if (loginStatus === Statuses.ERROR) {
            toast.error("Log in failed. Please check username and password.");
        }

        if (loginStatus === Statuses.DONE && auth !== false) {
            navigate('/dashboard');
        }
    }, [loginStatus, auth, navigate])
    
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