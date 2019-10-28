import React from 'react';

import { Button, Container, Divider, Grid, Header, Image, Segment, Icon, GridColumn, Card } from 'semantic-ui-react';

function NewsList(props) {
    let news = props.newsList.articles;
    const listItems = news.map((d, index) => {
        if (d.title != null && d.title != "" && d.description != null && d.description != "")
            return (<Card key={d.author + index}>
                <Card.Content header={d.title.trim()} />
                <Card.Content description={d.description.trim()} />
                <Card.Content extra>
                    <a href={d.url} target="_blank"><Icon name='user' />Habere git</a>
                </Card.Content>
            </Card>
            )
    });
    return (
        <>
            <Card.Group centered itemsPerRow={3}>
                {listItems}
            </Card.Group>
        </>
    );
}

export {
    NewsList as default,
};
