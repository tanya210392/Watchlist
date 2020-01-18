import React, {Fragment} from 'react';

import Tools from '../Tools';
import {ReactComponent as Arrow} from '../../assets/arrow.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';

const Story = ({data}) => {
    return (
        <div className="Card">
            <div className="content">
                {
                    data.type === "Story" ? (
                        <Fragment>пше
                            <div className="domain-logo">
                                <img src={data.domain_cached_logo_url} alt={data.domain_host}/>
                            </div>
                            <div className="text">
                                <h3>{data.title}</h3>
                                <p>{data.domain_name} {data.publishTime}</p>
                                <div>{data.description}</div>
                            </div>
                            <div className="right-bar">
                                <div className="score">{data.score}%</div>
                                <Arrow />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div className="domain-logo">
                                <img src={data.author_image_url} alt={data.author_screen_name}/>
                            </div>
                            <div className="text">
                                <h3>{data.title}</h3>
                                <p><Twitter /> @{data.author_screen_name} {data.publishTime} follower / ing ratio: {data.author_followers_count} </p>
                            </div>
                            <div className="right-bar">
                                <div className="score">{data.score}%</div>
                                <Arrow />
                            </div>
                        </Fragment>
                    )
                }
            </div>
            <Tools />
        </div>
    );
};

export default Story;