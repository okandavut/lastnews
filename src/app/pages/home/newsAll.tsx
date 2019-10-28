import React from 'react';

import NewsList from './newsList';

function NewsAll(props) {
    return (
        <>
            <NewsList newsList={props.newsList}/>
        </>
    );
}

export {
    NewsAll as default,
};
