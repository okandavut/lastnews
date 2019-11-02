import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/home/index';
import NotFound from './pages/notFound/index';

const App = () => 
	<Switch>
		<Route
			path="/"
			exact={true}
			strict={true}
			render={() => <Home />}
		/>
		<Route render={() => <NotFound />} />
	</Switch>

export default App;
