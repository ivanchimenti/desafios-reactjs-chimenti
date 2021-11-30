import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = (producto) => {
    return (
        <>
            <Card>
                <Image src={producto.producto.thumbnail} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{producto.producto.title}</Card.Header>
                <Card.Meta>
                    <span>{producto.producto.id}</span>
                </Card.Meta>
                <Card.Description>
                    {producto.producto.description ? producto.producto.description : 'Sin descripcion'}
                    <p style={{fontWeight:'bold'}}>Precio: ${producto.producto.price}</p>
                </Card.Description>    
                </Card.Content>
                <Card.Content extra>
                    <ItemCount stock={5} initial={0}/>
                </Card.Content>
            </Card>
        </>
    )
}

export default ItemDetail;
