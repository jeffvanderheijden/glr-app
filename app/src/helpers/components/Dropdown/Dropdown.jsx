import { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'
import './Dropdown.scss';

const Dropdown = ({
    keyProp,
    inSetProp,
    inProp,
    children
}) => {
    const nodeRef = useRef(null);
    // Hide dropdown when clicked outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nodeRef.current && !nodeRef.current.contains(event.target)) {
                inSetProp && inSetProp(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [inSetProp]);

    return (
        <CSSTransition
            key={keyProp}
            classNames="z-50 dropdown"
            unmountOnExit
            timeout={300}
            nodeRef={nodeRef}
            in={inProp}
        >
            <div ref={nodeRef}>
                {children}
            </div>
        </CSSTransition>
    )
}

export default Dropdown;