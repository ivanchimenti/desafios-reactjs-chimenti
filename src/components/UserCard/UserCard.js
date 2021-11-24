import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import './UserCard.css'

const UserCard = ({name, cod, description, img}) => (
    <div className='UserCard'>
        <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span className='date'>{cod}</span>
            </Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
            <ItemCount/>
            </Card.Content>
        </Card>
    </div>
)

export default UserCard