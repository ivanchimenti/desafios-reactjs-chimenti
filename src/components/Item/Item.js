import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import 'semantic-ui-css/semantic.min.css'

const Item = ({ producto }) => (
    <Card>
        <Image src={producto.thumbnail} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{producto.title}</Card.Header>
        <Card.Meta>
            <span>{producto.id}</span>
        </Card.Meta>
        <Card.Description>
            {producto.description ? producto.description : 'Sin descripcion'}
            <p style={{fontWeight:'bold'}}>Precio: ${producto.price}</p>
        </Card.Description>    
        </Card.Content>
        <Card.Content extra>
            <ItemCount stock={5} initial={0}/>
        </Card.Content>
    </Card>
)

export default Item;
