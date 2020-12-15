import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';

import Home from 'pages/home';
import Header from 'components/header';

import fetchFactory from 'factories/fetch';

const SWR_CONFIG_VALUE = {
	fetcher: fetchFactory,
};

function App() {
	return (
		<SWRConfig value={SWR_CONFIG_VALUE}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</SWRConfig>
	);
}

export default App;
