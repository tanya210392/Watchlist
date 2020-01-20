import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import UserMenu from '../UserMenu';
import { ReactComponent as MobileMenu } from '../../assets/mobile-menu.svg';
import './Header.scss';

const Header = ({onToggleHandler, isShow}) => {
    return (
        <div className="Header">
            <div className="mobile-menu">
                <MobileMenu />
            </div>
            <Logo />
            <UserMenu
                isShow={isShow}
                onToggleHandler={onToggleHandler}
                name="Jane Doe" />
        </div>
    );
};

Header.propTypes = {
    onToggleHandler: PropTypes.func,
    isShow: PropTypes.bool,
};

export default Header;