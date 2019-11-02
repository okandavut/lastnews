import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const Card = styled.a`
  width: 400px;
  margin: 30px 15px;
  padding-bottom: 50px;

  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25), inset 0 -15px 40px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
  text-decoration: none;
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
  font-size: 23px;
  font-weight: 500;
  color: ${colors.themeBlack};
`;

const CardParagraph = styled.p`
  font-size: 16px;
  line-height: 20px;
  padding: 10px 0;
  color: ${colors.themeParagraphColor};
`;

const CardButton = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px 0;

  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;

  border-radius: 10px;
  font-size: 17px;
  color: ${colors.themeGreen};
  text-align: center;
  line-height: 50px;
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
