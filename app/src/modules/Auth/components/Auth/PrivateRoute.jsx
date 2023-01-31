import { Navigate } from 'react-router-dom';
import actions from '../../actions';
import { useDispatch } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const token = '';
    dispatch(actions.tryTokenAuth({ token }));
    // How to delay render until after auth?

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;