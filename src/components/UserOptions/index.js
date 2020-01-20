import React from 'react';
import PropTypes from 'prop-types';

import './UserOptions.scss';

const UserOptions = ({options}) => {
    const list = options.map(option => <li key={option.id}>{option.value}</li>);

    return (
        <ul className="dropdown">
            { list }
        </ul>
    );
};

UserOptions.propTypes = {
    options: PropTypes.array.isRequired
};

export default UserOptions;