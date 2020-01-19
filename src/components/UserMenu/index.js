import React from 'react';

import avatar from '../../assets/user.png';
import {ReactComponent as Arrow} from '../../assets/black-arrow.svg';
import './UserMenu.scss'

const UserMenu = (props) => {
    const {onToggleHandler, name, isShow} = props;

    return (
        <div className={`UserMenu ${isShow ? "opened" : ""}`}>
            <img src={avatar} alt=""/>
            <div
                className="user-name"
                onClick={onToggleHandler}
            >
                <p>{name}</p>
                <Arrow />
            </div>
            { isShow ? <div className="dropdown">
                <span>Sign Out</span>
            </div> : null }
        </div>
    );
};

export default UserMenu;