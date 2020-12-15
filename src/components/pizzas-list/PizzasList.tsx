import Add from 'icons/Add';

import styles from './PizzasList.module.css';

import { Props } from './PizzasList.types';

function PizzasList(props: Props) {
	const { pizzas = [] } = props;

	if (!pizzas.length) {
		return null;
	}

	return (
		<ul className="row">
			{pizzas.map(({ id, name, description, imageUrl }) => {
				return (
					<li key={id} className="col s12 m6 l4">
						<div className="row">
							<div className="col s12">
								<div className="card">
									<div
										className={`card-image yellow accent-4 ${styles.cardImage}`}>
										{imageUrl && (
											<img
												src={imageUrl}
												alt={description}
											/>
										)}
										<span className="card-title">
											{name}
										</span>
										<button
											aria-label={`Make order with ${name} pizza`}
											className={`btn-floating halfway-fab waves-effect waves-light red ${styles.addButton}`}>
											<Add aria-hidden />
										</button>
									</div>
									<div
										className={`card-content ${styles.cardContent}`}>
										<p>{description}</p>
									</div>
								</div>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default PizzasList;
