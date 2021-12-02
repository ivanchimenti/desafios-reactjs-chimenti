import React, { useEffect, useState } from 'react';
import './ItemContainer.css';
import Item from '../Item/Item';

const ItemContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://api.mercadolibre.com/sites/MLA/search?q=&limit=5#json')
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, []);

	return (
		<div className='ItemContainer'>
			<h1>Productos</h1>
			<div className='Item'>
				{items.map((item) => {
					return <Item data={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default ItemContainer;