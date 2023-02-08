import { createRef } from 'react'
import {
    createBrowserRouter,
    useLocation,
    useOutlet,
} from 'react-router-dom'
import PrivateRoute from '../../modules/Auth/components/Auth/PrivateRoute'
import Login from '../../modules/Auth/components/Login/Login'
import Dashboard from '../../modules/Dashboard/components/Dashboard/Dashboard'
import Agenda from '../../modules/Agenda/components/Agenda/Agenda'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import AppLayout from '../layout/AppLayout';

const routes = [
    { path: '/', name: 'Login', element: <Login />, nodeRef: createRef() },
    { path: '/login', name: 'Login', element: <Login />, nodeRef: createRef() },
    { path: '/dashboard', name: 'Dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute>, nodeRef: createRef() },
    { path: '/agenda', name: 'Agenda', element: <PrivateRoute><Agenda /></PrivateRoute>, nodeRef: createRef() },
]

const Router = () => {
    const location = useLocation()
    const currentOutlet = useOutlet()
    const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                {() => (
                    <>
                        {location.pathname === '/' || location.pathname === '/login' ? (
                            <div ref={nodeRef} className="page">
                                {currentOutlet}
                            </div>
                        ) : (
                            <AppLayout>
                                <div ref={nodeRef} className="page">
                                    {currentOutlet}
                                </div>
                            </AppLayout>
                        )}
                    </>
                )}
            </CSSTransition>
        </SwitchTransition>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Router />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
])

export default router;