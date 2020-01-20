import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import './Layout.scss';

class Layout extends Component {
    state = {
        isShow: false
    };

    onToggleHandler = () => {
        this.setState(prevState => {
            return {
                isShow: !prevState.isShow
            }
        })
    };

    render() {
        const {isShow} = this.state;

        return (
            <Fragment>
                <Header
                    isShow={isShow}
                    onToggleHandler={this.onToggleHandler} />
                <main>
                    <div className="content-wrapper">
                        <h2 className="title">Watchlist</h2>
                        {this.props.children}
                    </div>
                </main>
            </Fragment>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;