import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const Card = styled.a`
  width: 20%;
  margin: 30px 15px;
  padding-bottom: 50px;

  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25), inset 0 -15px 40px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;

  &:hover {
    text-decoration: none;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 250px;

  background: url(${(props: {imageUrl: string}) => props.imageUrl || ''});
  background-size: cover;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 25px;
  color: ${colors.themeBlack};
`;

const CardParagraph = styled.p`
  font-size: 15px;
  color: ${colors.themeGray};
`;

const CardButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  bottom: 0;

  padding: 15px 0;
  border-radius: 10px;
  font-size: 17px;
  color: ${colors.themeGreen};
  text-align: center;
`;

const NewsBox = (props) =>
  <Card href={props.article.url} target="_blank">
    <CardImage imageUrl={props.article.urlToImage} />
    <CardContent>
      <CardTitle>{props.article.title}</CardTitle>
      <CardParagraph>{props.article.description}</CardParagraph>
    </CardContent>
    <CardButton>Okumaya Devam Et</CardButton>
  </Card>

export default NewsBox;
