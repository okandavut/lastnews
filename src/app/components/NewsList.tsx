import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NewsBox from './NewsBox';
import Loader from './Loader';

import { getNews } from '../services/api';

const NewsListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
  justify-content: center;
`;

const LoaderContent = styled.div`
	height: 80vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

function NewsList(props) {
	const [news, setNews] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const newsBoxes = news && news.map((article, index) => <NewsBox article={article} key={index} />)

	useEffect(() => {
		setIsLoading(true);
		getNews(props.category, props.country).then(({articles}) => {
			setNews(articles);
			setIsLoading(false);
		});
	},[props.category, props.country]);



	return (
		isLoading ?
			<LoaderContent>
				<Loader />
			</LoaderContent>
		:
			<NewsListWrapper>
				{newsBoxes}
			</NewsListWrapper>
	);
}

export default NewsList;
