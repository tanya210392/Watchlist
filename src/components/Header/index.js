import React from 'react';

import Logo from '../Logo';
import UserMenu from '../UserMenu';

const Header = () => {
    return (
        <div className="Header">
            <Logo />
            <UserMenu />
        </div>
    );
};

export default Header;