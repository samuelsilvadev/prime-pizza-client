import useApi from 'hooks/useApi';

import { API } from 'constants/api';

import type { PizzasResponseApi } from './Home.types';

function Home() {
	useApi<PizzasResponseApi[]>(API.PIZZAS);

	return null;
}

export default Home;
