import { NavLink } from "react-router-dom";
import useLogout from './../hooks/useLogout';

const SideNav = () => {
    const logout = useLogout();

    const linkClass = "px-10 py-2 flex transition-all after:transition-all relative hover:text-glr-green-500";
    const activeLinkClass = "bg-gray-700 text-white after:content-[''] after:h-full after:w-1 after:bg-glr-green-500 after:absolute after:right-0 after:top-0";
    return (
        <ul className="text-gray-200">
            <li>
                <NavLink className={({ isActive }) => isActive ? linkClass + " " + activeLinkClass : linkClass} to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? linkClass + " " + activeLinkClass : linkClass} to="/agenda">Agenda</NavLink>
            </li>
            <li className="px-10 py-2 flex transition-colors cursor-pointer hover:text-glr-green-500" onClick={logout}>
                Logout
            </li>
        </ul>
    )
}

export default SideNav;