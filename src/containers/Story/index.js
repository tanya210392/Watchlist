import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Tools from '../../components/Tools';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import './Story.scss';

class Story extends Component {
    state = {
        imageLoadError: false,
        isShow: false
    };

    kFormatter = (num) => Math.abs(num) > 999 ?
        Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' :
        Math.sign(num)*Math.abs(num);

    onToggleHandler = () => {
        this.setState(prevState => {
            return {
                isShow: !prevState.isShow
            }
        });
    };

    render () {
        const {type, domainLogoUrl, url, title, domainName, publishTime, description,
            score, authorScreenName, authorFollowersCount} = this.props;
        let {authorImageUrl} = this.props;
        const {imageLoadError, isShow} = this.state;

        if (imageLoadError) {
            authorImageUrl = '/error404.png';
        }

        return (
            <div className="Story">
                <div className="content">
                    {
                        type === "Story" ? (
                            <Fragment>
                                <div className="domain-logo">
                                    <img src={domainLogoUrl} alt=""/>
                                </div>
                                <div className="text">
                                    <a
                                        className="title"
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer">{title}</a>
                                    <p><span>{domainName}</span> <span>{moment(publishTime).fromNow()}</span></p>
                                    { isShow ? <div className="description">{description}</div> : null }
                                </div>
                                <div className="right-bar">
                                    <div className="score">{score} %</div>
                                    <button
                                        onClick={this.onToggleHandler}
                                        className={`toggle-btn ${isShow ? "hide" : "show"}`}
                                    >
                                        <Arrow/>
                                        <span className="less">{isShow ? "Less" : "More"}<Arrow/></span>
                                    </button>
                                </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <div className="domain-logo">
                                    <img src={authorImageUrl} onError={e => this.setState({ imageLoadError: true })} alt=""/>
                                </div>
                                <div className="text">
                                    <a
                                        className="title"
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer">{title}</a>
                                    <p>
                                        <Twitter />
                                        <span>@{authorScreenName}</span>
                                        <span>{moment(publishTime).fromNow()}</span>
                                        <span>follower / ing ratio: {this.kFormatter(authorFollowersCount)}</span>
                                    </p>
                                </div>
                                <div className="right-bar">
                                    <div className="score">{score} %</div>
                                    <button
                                        onClick={this.onToggleHandler}
                                        className={`toggle-btn ${ isShow ? "hide" : "show" }`}
                                    >
                                        <Arrow/>
                                        <span className="less">{isShow ? "Less" : "More"}<Arrow/></span>
                                    </button>
                                </div>
                            </Fragment>
                        )
                    }
                </div>
                { isShow ? <Tools /> : null }
            </div>
        );
    }
}

Story.propTypes = {
    type: PropTypes.string.isRequired,
    domainLogoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    domainName: PropTypes.string.isRequired,
    publishTime: PropTypes.string.isRequired,
    description: PropTypes.string,
    score: PropTypes.number.isRequired,
    authorImageUrl: PropTypes.string,
    authorScreenName: PropTypes.string,
    url: PropTypes.string.isRequired,
    authorFollowersCount: PropTypes.number,
};

export default Story;