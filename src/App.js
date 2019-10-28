import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Card, Icon, Segment, Grid, GridColumn } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';



var getNewsByCategory = (type) => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=bb363c3dde344f10b3f6924860f2667f`)
    .then(r => r.json())
};
var getAllNews = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=bb363c3dde344f10b3f6924860f2667f`)
      .then(r => r.json())
      .then(setNews)
  }, []);
  return news;
};

function App() {
  var news = getAllNews();

  const listItems = (news != null && news.articles != null) ? news.articles.map((d, index) => {
    if (d.title != null && d.title != "" && d.description != null && d.description != "")
      return (<Card key={d.author + index}>
        <Card.Content header={d.title.trim()} />
        <Card.Content description={d.description.trim()} />
        <Card.Content extra>
          <a href={d.url} target="_blank"><Icon name='user' />Habere git</a>
        </Card.Content>
      </Card>
      );
  }
  ) : "";
  return (
    <div style={{ padding: "3%" }}>
      <Grid columns={3} divided>
        <Grid.Row>
          <GridColumn width={2}>
            <p>Kategoriler</p>
            <ul>
              <li onClick={() => (getNewsByCategory("business"))}>İş Dünyası</li>
              <li>Eğlence</li>
              <li>Sağlık</li>
              <li>Bilim</li>
              <li>Spor</li>
              <li>Teknoloji</li>
            </ul>
          </GridColumn>
          <GridColumn width={11}>
            <Card.Group centered itemsPerRow={3}>
              {listItems}
            </Card.Group>
          </GridColumn>
          <GridColumn width={3}>
            <p>Popüler Haberler</p>
            <ul>
              <li>Şahika Ercümen dünya rekoru kırdı asker selamını çaktı - Internet Haber</li>
              <li>Böylesini evinize sakın sokmayın! Balıkta inanılmaz hile... - Hürriyet</li>
              <li>Ekonomik krizdeki Arjantin'de sandıktan sol çıktı - Gazete Duvar</li>
            </ul>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div >
  );
}
export default hot(App);

