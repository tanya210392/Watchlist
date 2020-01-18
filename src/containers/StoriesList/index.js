import React, {Component, Fragment} from 'react';

import storiesList from '../../stories';
import Story from '../../components/Story';

class StoriesList extends Component {
    render() {
        const stories = storiesList.stories.map(story => (
            <Story key={story.id} data={story} />
        ));

        return (
            <Fragment>
                <h2>Watchlist</h2>
                {stories}
            </Fragment>
        );
    }
}

export default StoriesList;