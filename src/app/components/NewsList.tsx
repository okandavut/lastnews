import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NewsBox from './NewsBox';
import { getNews } from '../services/api';

const NewsListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
  justify-content: center;
`;

function NewsList(props) {
	const [news, setNews] = useState();
	const newsBoxes = news && news.map((article, index) => <NewsBox article={article} key={index} />)

	useEffect(() => {
		getNews(props.category, props.country).then(({articles}) => {
			setNews(articles);
		});
	},[props.category, props.country]);



	return (
		<NewsListWrapper>
			{newsBoxes}
		</NewsListWrapper>
	);
}

export default NewsList;
