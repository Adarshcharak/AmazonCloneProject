import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

// The value property needs to be passed as a prop


const Subtotal = () => {

    const [state, dispatch] = useStateValue();

    return ( <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
            <>
            <p>
                Subtotal ( {state.basket.length} Items) : <strong>{value}</strong>
            </p>
            <small>
                <input type="checkbox" />
                This order contains a gift 
            </small>   

            <button className='btn'>Proceed to Checkout</button> 
            </>
    )}
    
    decimalScale={2}
    value ={getBasketTotal(state.basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"₹"}

        />
    </div> );
}
 
export default Subtotal;