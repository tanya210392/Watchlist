import React from 'react';
import PropTypes from 'prop-types';

import UserOptions from '../UserOptions';
import avatar from '../../assets/user.png';
import arrow from '../../assets/black-arrow.png';
import './UserMenu.scss'

const UserMenu = ({onToggleHandler, name, isShow}) => {
    const options = [
        {id: 1, value: "Sign Out"}
    ];

    return (
        <div className={`UserMenu ${isShow ? "opened" : ""}`}>
            <img src={avatar} alt=""/>
            <div
                className="user-name"
                onClick={onToggleHandler}
            >
                <p>{name}</p>
                <img src={arrow} alt="" />
            </div>
            { isShow ? <UserOptions options={options || []} /> : null}
        </div>
    );
};

UserMenu.propTypes = {
    onToggleHandler: PropTypes.func,
    isShow: PropTypes.bool,
    name: PropTypes.string,
};

export default UserMenu;