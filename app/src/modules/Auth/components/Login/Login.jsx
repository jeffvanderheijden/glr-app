import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LoginView from './LoginView';
import { Statuses } from './../../../../helpers/constants/loadingStatus';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={location.pathname}
        >
            <LoginView 
                setEmail={setEmail}
                setPassword={setPassword}
                submitForm={submitForm}
                loginStatus={loginStatus}
            />
        </motion.div>
    )
}

export default Login;