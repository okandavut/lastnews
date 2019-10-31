import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';

import NewsBox from './NewsBox';
import { getNews } from '../services/api';

function NewsList(props) {
    const [news, setNews] = useState();
    const newsBoxes = news && news.map((article, index) => <NewsBox article={article} key={index} />)

    useEffect(() => {
        getNews(props.category, props.country).then(({articles}) => {
            setNews(articles);
        });
    },[props.category, props.country]);

    

    return (
        <Card.Group centered itemsPerRow={3}>
            {newsBoxes}
        </Card.Group>
    );
}

export default NewsList;
