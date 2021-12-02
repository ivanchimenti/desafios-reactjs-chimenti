import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {

	// SETEAMOS STATE COUNTER
	const [counter, setCounter] = useState(initial);

	// METODOS PARA ACTUALIZAR EL STATE
	const handlerCounterUp = () => {
		if (counter < stock) {
		setCounter(counter + 1);
		}
	}
		
	const handlerCounterDown = () => {
		if (counter > initial) {
		setCounter(counter - 1);
		}
	}

    const logrado = () => {
        alert("Usted ha agregado productos a su carrito")
    }

	return (
		<div className='ItemCount'>
 			<div className='CounterSection'>
 				<div className='btn-section'>
                    <button className='btnComprarMas' onClick={handlerCounterUp}>+</button>
                    <input
                        placeholder={counter}
                        name="cantidad">
                    </input>
 					<button className='btnComprarMenos' onClick={handlerCounterDown}>-</button>
                    <button className='btnComprar' onClick={logrado}>Comprar</button>
 				</div>

 			</div>
		</div>
 	);
}
		

export default ItemCount
