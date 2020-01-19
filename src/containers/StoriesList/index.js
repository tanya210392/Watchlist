import React, {Component, Fragment} from 'react';

import storiesList from '../../stories';
import Story from '../Story';

class StoriesList extends Component {
    state = {
        // error: false
    };

    render() {
        const stories = storiesList.stories.map(story => (
            <Story
                key={story.id}
                type={story.type}
                src={story.domain_cached_logo_url}
                title={story.title}
                domainName={story.domain_name}
                publishTime={story.publishTime}
                description={story.description}
                score={story.score}
                authorImageUrl={story.author_image_url}
                authorScreenName={story.author_screen_name}
                authorFollowersCount={story.author_followers_count}
                url={story.url}
            />
        ));

        return (
            <Fragment>
                {stories}
            </Fragment>
        );
    }
}

export default StoriesList;