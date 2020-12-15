import useApi from 'hooks/useApi';

import { API } from 'constants/api';

import type { PizzasResponseApi } from './Home.types';
import PizzasList from 'components/pizzas-list';

function Home() {
	const { data } = useApi<PizzasResponseApi[]>(API.PIZZAS);

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<main className="container">
			<PizzasList pizzas={data} />;
		</main>
	);
}

export default Home;
