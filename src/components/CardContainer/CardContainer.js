import React, { useState, useEffect } from 'react';
import './CardContainer.css';
import axios from 'axios';
// Components
import CardComponent from '../CardComponent/CardComponent';
import Spinner from '../Spinner/Spinner';

const CardContainer = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios(
			'https://api.nasa.gov/planetary/apod?api_key=y8njdeILF6vhGd56jAgglx9H7iqPpyNGXlLz0Msh'
		).then((res) => setData(res.data));
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<div className='CardContainer'>
            <h2>Información</h2>
			{isLoading ? <Spinner /> : <CardComponent data={data} />}
		</div>
	);
};

export default CardContainer;