import actions from '../../modules/Auth/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Statuses } from '../constants/loadingStatus';

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return () => {
        navigate('/');
        // Using setTimeout to allow page to animateOut before throwing away Redux store
        setTimeout(() => {
            dispatch(actions.setLoginStatus(Statuses.EMPTY));
            dispatch(actions.setUserAuth(Statuses.EMPTY));
            dispatch(actions.setUser(Statuses.EMPTY));
            dispatch(actions.setAuthStatus(Statuses.EMPTY));
        }, 300);
        // Using setTimeout to prevent warning message caused by ERROR status on login screen
        setTimeout(() => {
            localStorage.removeItem('glr-jwt');
        }, 300);
    }
}

export default useLogout;