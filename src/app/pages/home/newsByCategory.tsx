import React, { useState, useEffect } from 'react';
import NewsList from './newsList';


function useFilteredNews(category) {
    const [filteredNews, setFiltered] = useState();
    useEffect(() => {
        async function fetchData() {
            const newsContent = await getNewsByCategory(category);
            setFiltered(newsContent);
        }
        fetchData();
    }, []);

    return filteredNews;
}


async function getNewsByCategory(category) {

    const newsRequest = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=bb363c3dde344f10b3f6924860f2667f`);
    const newsContent = await newsRequest.json();

    return newsContent;

}


function NewsByCategory(props) {
    console.log("okan");
    let filteredNews = useFilteredNews(props.category);
    console.log(filteredNews);
    return (
        <>
            {(filteredNews != undefined) ? <NewsList newsList={filteredNews} /> : ""}
        </>
    );
}

export {
    NewsByCategory as default,
};
