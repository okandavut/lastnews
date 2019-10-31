import React from 'react';
import { Icon, Card } from 'semantic-ui-react';

const NewsBox = (props) =>
  <Card>
      <Card.Content header={props.article.title} />
      <Card.Content description={props.article.description} />
      <Card.Content extra>
          <a href={props.article.url} target="_blank"><Icon name='user' />Habere git</a>
      </Card.Content>
  </Card>

export default NewsBox;
