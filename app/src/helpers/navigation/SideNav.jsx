import { NavLink } from 'react-router-dom';
import useLogout from './../hooks/useLogout';
import styles from './SideNav.module.scss';

const SideNav = ({
    navSize,
    toggleNavSize
}) => {
    const logout = useLogout();

    const listClass = "flex transition-colors cursor-pointer hover:text-glr-green-500";
    const listClassSmall = navSize === "small" ? "justify-center" : "";
    const linkClass = (navSize === "small" ? "px-0 justify-center" : "px-10") + " min-w-full transition-all py-2 flex items-center transition-all after:transition-all relative hover:text-glr-green-500";
    const activeLinkClass = "bg-gray-700 text-white hover:text-white hover:cursor-default after:content-[''] after:h-full after:w-1 after:bg-glr-green-500 after:absolute after:right-0 after:top-0";

    return (
        <ul className={(navSize === "small" ? styles.smallSideNav : styles.sideNav) + " h-full text-gray-200 relative"}>
            <li className={(navSize === "small" ? "justify-center" : "px-10") + " flex items-center w-full h-20"}>
                Logo
            </li>
            <li className={listClass + listClassSmall}>
                <NavLink className={({ isActive }) => isActive ? linkClass + " " + activeLinkClass : linkClass} to="/dashboard">
                    <i className="uil uil-window-grid"></i> 
                    {navSize !== "small" && ( <>Dashboard</> )}
                </NavLink>
            </li>
            <li className={listClass + listClassSmall}>
                <NavLink className={({ isActive }) => isActive ? linkClass + " " + activeLinkClass : linkClass} to="/agenda">
                    <i className="uil uil-schedule"></i> 
                    {navSize !== "small" && ( <>Agenda</> )}
                </NavLink>
            </li>
            <li className={styles.divider + " bg-gray-700"} />
            <li className={listClass + listClassSmall} onClick={logout}>
                <div className={linkClass}>
                    <i className="uil uil-signout"></i> 
                    {navSize !== "small" && ( <>Logout</> )}
                </div>
            </li>
            <li onClick={() => { toggleNavSize() }} className={listClass + listClassSmall + " absolute bottom-0 w-full"}>
                <div className={linkClass + " justify-center text-gray-500 py-4"}>
                    {navSize === "small" ? (
                        <i className="uil uil-angle-right pr-0"></i>
                    ) : (
                        <>hide <i className="uil uil-angle-left pr-0"></i></>
                    )}
                </div>
            </li>
        </ul>
    )
}

export default SideNav;