import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from './../components/Dropdown/Dropdown';
import styles from './AppLayout.module.scss';

const AppWrapper = ({ children }) => {
    const [userDropdown, setUserDropdown] = useState(false);
    const user = useSelector(state => state.login.user.user);
    const [navSize, setNavSize] = useState('large');

    const toggleNavSize = () => {
        navSize === 'small' ? setNavSize('large') : setNavSize('small');
    }

    return (
        <div className="flex h-screen">
            <div className={(navSize === 'small' ? styles.appMainSmall : styles.appMain) + " bg-gray-100 flex flex-col"}>
                <div className="flex items-center justify-end w-full border-b h-20 px-8">
                    <div className="flex items-center cursor-pointer" onClick={() => { setUserDropdown(!userDropdown) }}>
                        <p className="pr-2 text-sm">{user && user}</p>
                        <div className="rounded-full bg-slate-500 w-12 h-12" id="user-button" aria-expanded="true" aria-haspopup="true" />
                        <Dropdown
                            inSetProp={setUserDropdown}
                            inProp={userDropdown}
                            keyProp={'userDropdown'}
                        >
                            <div className="absolute top-14 right-8 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <Link className="text-gray-700 block px-4 py-2 text-sm" to="/user/account-settings">Account settings</Link>
                                    <Link className="text-gray-700 block px-4 py-2 text-sm" to="/support">Support</Link>
                                </div>
                            </div>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex w-full h-full p-8">
                    <div className="bg-white p-8 rounded-md drop-shadow-xl w-full">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppWrapper;