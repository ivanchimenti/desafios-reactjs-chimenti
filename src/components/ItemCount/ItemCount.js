import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = () => {
	// SETEAMOS STATE COUNTER
	const [counter, setCounter] = useState(0);

	// METODOS PARA ACTUALIZAR EL STATE
	const handlerCounterUp = () => {
		setCounter(counter + 1);
	}
		
	const handlerCounterDown = () => {
		setCounter(counter - 1);
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



           
    