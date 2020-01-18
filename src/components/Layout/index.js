import React, {Component, Fragment} from 'react';

import Header from '../Header';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {/*<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />*/}
                {/*<SideDrawer*/}
                {/*    closed={this.sideDrawerClosedHandler}*/}
                {/*    open={this.state.showSideDrower}*/}
                {/*/>*/}
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;