import React from "react";
import "./cartItem.css";
import {useStateValue} from './StateProvider'

const CartItem = ({ id, title, price, image, rating, itemCount}) => {

    const [state,dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }

  return (
    <div className="cartItem">
      <img className="cartItem_image" src={image} alt={title} />
      <div className="cartItem_info">
        <p className="cartItem_title">{title}</p>
        <p className="cartItem_price">
        <small>₹</small>
        <span>{price}</span>
        </p>
        <div className="cartItem_rating">
            {Array(rating)
            .fill()
            .map((_,i) => ( <p>★</p> ))
            }
        </div>
        
        <button className="btn" onClick={() => removeFromBasket()}>Remove from Basket</button>
      </div>
      
    </div>
  );
};

export default CartItem;
