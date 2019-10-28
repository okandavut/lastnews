import React, { useState, useEffect } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Segment, Icon, GridColumn, Card } from 'semantic-ui-react';
import News from './newsAll';
import NewsByCategory from './newsByCategory';

async function getAllNews() {

    const newsRequest = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=bb363c3dde344f10b3f6924860f2667f`);
    const newsContent = await newsRequest.json();

    return newsContent;
}

function useNews() {
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchData() {
            const newsContent = await getAllNews();
            setNews(newsContent);
        }
        fetchData();
    }, []);

    return news;
}




function Home(props) {
    let news = useNews();
    let filteredNews = undefined;

    const [category, setCategory] = useState("");
    return (
        <div style={{ padding: "3%" }}>
            <Grid columns={3} divided>
                <Grid.Row>
                    <GridColumn width={2}>
                        <p>Kategoriler</p>
                        <ul>
                            <li onClick={() => { setCategory("business") }}>İş Dünyası</li>
                            <li onClick={() => { setCategory("entertainment") }}>Eğlence</li>
                            <li onClick={() => { setCategory("health") }}>Sağlık</li>
                            <li onClick={() => { setCategory("science") }}>Bilim</li>
                            <li onClick={() => { setCategory("sports") }}>Spor</li>
                            <li onClick={() => { setCategory("technology") }}>Teknoloji</li>
                        </ul>
                    </GridColumn>
                    <GridColumn width={11}>
                        {category != "" ? <NewsByCategory category={category} /> : news != undefined ? <News newsList={news} /> : ""}
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

export {
    Home as default,
};
