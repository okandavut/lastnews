import React from 'react';
import { Card } from 'semantic-ui-react';

import NewsBox from '../../components/NewsBox';

function NewsList(props) {
    const { articles } = props.newsList;
    const listItems = articles && articles.map((article, index) =>
        <NewsBox article={article} key={index} />
    );

    return (
        <Card.Group centered itemsPerRow={3}>
            {listItems}
        </Card.Group>
    );
}

export default NewsList;
