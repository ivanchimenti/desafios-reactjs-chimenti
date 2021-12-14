import React, { useEffect, useState } from 'react';
import './ItemContainer.css';
import Item from '../Item/Item';

const ItemContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/users')
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, []);

	return (
		<div className='ItemContainer'>
			<h2>Productos</h2>
			<div className='Item'>
				{items.map((item) => {
					return <Item data={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default ItemContainer;