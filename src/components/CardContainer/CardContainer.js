import React, { useEffect, useState } from 'react';
import './CardContainer.css';
import UserCard from '../UserCard/UserCard';

const CardContainer = () => {

	return (
		<div className='CardContainer'>
			<h1>Productos</h1>
			<div className='UserCard'>
				{users.map((user) => {
					return <UserCard data={user} key={user.cod} />;
				})}
			</div>
		</div>
	);
};

export default CardContainer;