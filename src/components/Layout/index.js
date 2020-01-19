import React, {Component, Fragment} from 'react';

import Header from '../Header';
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
                {/*<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />*/}
                {/*<SideDrawer*/}
                {/*    closed={this.sideDrawerClosedHandler}*/}
                {/*    open={this.state.showSideDrower}*/}
                {/*/>*/}
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

export default Layout;