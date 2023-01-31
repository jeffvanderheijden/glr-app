import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Statuses } from './../../../../helpers/constants/loadingStatus';

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const authStatus = useSelector(state => state.login.auth_status);
    const user = useSelector(state => state.login.user);
    const token = localStorage.getItem('glr-jwt');

    useEffect(() => {
        dispatch(actions.tryTokenAuth({ token }));
    }, [dispatch, token]);

    return (
        <>
            {authStatus === Statuses.ERROR && (
                <Navigate to="/login" replace={true} />
            )}

            {authStatus === Statuses.DONE && user.id !== false && (
                children
            )}
        </>
    )
};

export default PrivateRoute;