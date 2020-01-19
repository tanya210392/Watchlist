import React from 'react';

import {TOOLS} from '../../constants/tools';
import {ReactComponent as Bookmark} from '../../assets/bookmark.svg';
import {ReactComponent as Like} from '../../assets/like.svg';
import {ReactComponent as Dislike} from '../../assets/dislike.svg';
import './Tools.scss';

const Tools = () => {
    const tools = TOOLS.map(item => (
        <div key={item.type}>
            {item.type === 1 ? <Bookmark /> : item.type === 2 ? <Like /> : <Dislike />}
            <span>{item.title}</span>
        </div>
    ));
    return (
        <div className="Tools">
            {tools}
        </div>
    );
};

export default Tools;