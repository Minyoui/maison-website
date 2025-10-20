import './menu.scss';
import { useState } from 'react';

const Menu = ({ onToggle }) => {
    const [isclicked, setIsClicked] = useState(false);

    const handleClick = () => {
        const newState = !isclicked;
            setIsClicked(newState);
            if (onToggle) onToggle(newState);
    };

    return (
        <button 
            type="button" 
            className={`menu-btn ${isclicked? 'clicked':''}`}
            onClick={handleClick}
            id="menu-icon"
        >
            <div className='upper-line'/>
            <div className='middle-line'/>
            <div className='lower-line'/>
        </button>
    );
};

export default Menu;