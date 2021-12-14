import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardComponent = ({ data }) => (
	<Card style={{ width: 800, margin: 40 }}>
		<Image src={data.hdurl} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{data.title}</Card.Header>
			<Card.Meta>
				<span className='date'>{data.date}</span>
			</Card.Meta>
			<Card.Description>{data.explanation}</Card.Description>
		</Card.Content>
	</Card>
);

// Specifies the default values for props:
CardComponent.defaultProps = {
	title: 'Some title',
	date: 'Some date',
	explanation: 'Some explanation',
};

export default CardComponent;