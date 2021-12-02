import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardComponent = ({ data }) => (
  <Card style={{width: 800, margin: 40}}>
    <Image src={data.hdurl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.date}</span>
      </Card.Meta>
      <Card.Description>
        {data.explanation}
      </Card.Description>
    </Card.Content>
  </Card>
);

// Default Props
CardComponent.defaultProps = {
  title:'Some title',
  date: 'Some date',
  explanation: 'Some explanation',
  img: 'https://www.google.com/search?q=via+lactea&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5v73X0MH0AhUQrpUCHeGOA0UQ_AUoAXoECAEQAw&biw=1396&bih=656&dpr=1.38#imgrc=ZMWxt3Vg3Gt9eM',
}

export default CardComponent