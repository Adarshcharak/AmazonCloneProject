import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Product = ({id,title, image, price, rating, itemCount}) => {

    const [state, dispatch] = useStateValue();
      console.log(state)

    const addToBasket = () => {
        
        dispatch({
            type : "ADD_TO_BASKET",
            item: {
                id: id,
                title : title,
                image: image,
                price: price,
                rating: rating,
                itemCount : itemCount
            }
        })

    }

  return ( <div className="product">
        <div className="product_info">
            <p>{title}</p>
        
        <div className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
        </div>
        <div className="product_rating">
            {Array(rating).fill().map((_,i) => (<p>★</p>))}
        </div>
        </div>
        <img src={image} alt="" />

       <Link to={'/checkout'} ><button className="btn" onClick={addToBasket}>Add to Basket</button></Link>     
    </div>
  )
};

export default Product;
