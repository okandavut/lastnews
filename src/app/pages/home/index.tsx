import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

import NewsList from '../../components/NewsList';
import CategoryMenu from '../../components/CategoryMenu';
import CountryMenu from '../../components/CountryMenu';

const MenuWrapper = styled.div`
  padding: 20px;
`;

const Home = () => {
	const DEFAULT_SELECTED_CATEGORY = 'all';
	const DEFAULT_SELECTED_COUNTRY = 'tr';
	const [category, setCategory] = useState();
	const [country, setCountry] = useState();

	return (
		<div>
			<MenuWrapper>
				<CategoryMenu category={category || DEFAULT_SELECTED_CATEGORY} setCategory={setCategory} />
				<CountryMenu country={country || DEFAULT_SELECTED_COUNTRY} setCountry={setCountry} />
			</MenuWrapper>
			<Grid divided>
				<Grid.Row>
					<GridColumn>
						<NewsList category={category} country={country} />
					</GridColumn>
				</Grid.Row>
				<GridRow>
					<GridColumn width={3}>
						<a href="https://newsapi.org/" target="_blank">Api from newsapi.org</a>
					</GridColumn>
				</GridRow>
			</Grid>
		</div >
	);
}

export default Home;
