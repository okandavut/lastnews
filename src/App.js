import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

import { Container, Header, Message, Segment } from "semantic-ui-react";

import CardCarousel from "./CardNews";

const useGithub = userName => {
  const [news, setNews] = useState();
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=bb363c3dde344f10b3f6924860f2667f`)
      .then(r =>r.json())
      .then(setNews);
  }, [userName]);

  return news;
};

function App() {
  const news = useGithub('ReeganExE');
  
  
  if (!news) {
    return <div>Loading...</div>;
  }
  // const listItems = news.articles.map((d) => <li key={d.publishedAt} style={{ listStyleType: "none" }}><p style={{color:"red"}}>{d.title}</p><ul ><li >{d.description}</li></ul></li>);

  return (
   
    <div>
       <Segment attached="bottom">
        <CardCarousel />
      </Segment>
    {/* {listItems } */}
    
    </div>
  );

}

export default hot(App);
