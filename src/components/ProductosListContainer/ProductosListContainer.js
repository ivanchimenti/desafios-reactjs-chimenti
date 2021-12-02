import {React, useState, useEffect} from 'react'
import Item from '../Item/Item';

const ProductosListContainer = () => {
    const [busqueda, setBusqueda] = useState('');
    const [productos, setProductos] = useState([]);

    useEffect(() => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}&limit=5#json`)
			.then((resp) => resp.json())
            .then(respObj => {
                const arrayProductos = respObj.results;
                setProductos(arrayProductos);
            })
            .catch(error => console.log('Error: ', error))
			
	}, [busqueda]);

    const actBusq = (event) => {
        const valor = event.target.value;
        setBusqueda(valor);
    }

    return (
        <>
            <input type="text" onChange={actBusq} value={busqueda}/>

            {
                productos.map((producto, indice) => (
                    <Item producto={producto} key={indice}/>
                ))
            }
        </>
    )
}

export default ProductosListContainer; 
