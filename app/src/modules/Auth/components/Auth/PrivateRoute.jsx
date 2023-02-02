import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Statuses } from './../../../../helpers/constants/loadingStatus';

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.login.auth_status);
    const user = useSelector(state => state.login.user);
    const token = localStorage.getItem('glr-jwt');

    useEffect(() => {
        dispatch(actions.tryTokenAuth({ token }));
    }, [dispatch, token]);

    useEffect(() => {
        if (authStatus === Statuses.ERROR) {
            navigate('/login');
        }
    }, [navigate, authStatus])

    return (
        <>
            {authStatus === Statuses.DONE && user.id !== false && (
                children
            )}
        </>
    )
};

export default PrivateRoute;