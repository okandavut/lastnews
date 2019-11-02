import React, { useState } from 'react';
import styled from 'styled-components';

import NewsList from '../../components/NewsList';
import CategoryMenu from '../../components/CategoryMenu';
import CountryMenu from '../../components/CountryMenu';

import { colors } from '../../utils/colors';

const MenuWrapper = styled.section`
  padding: 20px;
`;

const NewsContent = styled.section`
	width: 100%;
	padding-bottom: 40px;
`;

const Footer = styled.section`
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid ${colors.themeGrey};

	background-color: ${colors.themeBlack};
	text-align: center;
`;

const FooterLink = styled.a`
	color: ${colors.themeGreen};

	&:hover {
		color: ${colors.themeGreen};
	}
`;

const Home = () => {
	const DEFAULT_SELECTED_CATEGORY = 'all';
	const DEFAULT_SELECTED_COUNTRY = 'tr';
	const [category, setCategory] = useState();
	const [country, setCountry] = useState();

	return (
		<>
			<MenuWrapper>
				<CategoryMenu
					category={category || DEFAULT_SELECTED_CATEGORY}
					setCategory={setCategory}
				/>
				<CountryMenu
					country={country || DEFAULT_SELECTED_COUNTRY}
					setCountry={setCountry}
				/>
			</MenuWrapper>
			<NewsContent>
				<NewsList category={category} country={country} />
			</NewsContent>
			<Footer>
				<FooterLink href="https://newsapi.org/" target="_blank">Api from newsapi.org</FooterLink>
			</Footer>
		</>
	);
}

export default Home;
