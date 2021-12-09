import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import 'semantic-ui-css/semantic.min.css'

const Item = ({ data }) => (
    <Card>
        <Image src={data.avatar_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{data.login}</Card.Header>
            <Card.Meta>
                <span>{data.id}</span>
            </Card.Meta>
            <Card.Description>
                {data.description ? data.description : 'Sin descripcion'}
                <p style={{fontWeight:'bold'}}>Precio: ${data.price ? data.price : '1500'}</p>
            </Card.Description>    
        </Card.Content>
        <Card.Content extra>
            <ItemCount stock={5} initial={0}/>
        </Card.Content>
    </Card>
);

export default Item;
