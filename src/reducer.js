export const initialState = {
    basket:[],
    user: null
};

// selector

export const getBasketTotal = (basket) => {
    let sum = 0;
    for(let i=0;i<basket.length;i++)
    {
        sum += basket[i].price;
    }
    return sum;
}


const reducer = (state,action) => {
  
    switch (action.type)
    {
        case "ADD_TO_BASKET":
            return {
 
                ...state,
                basket : [...state.basket, action.item],
                
                // basket : [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":

            const index = state.basket.findIndex((item) => item.id === action.id);
            let newBasket = [...state.basket]
            newBasket.splice(index,1);

            return {
                basket : newBasket
            } 

        case "SET_USER":

            return{
                ...state,
                user : action.user
            }
        
    
    }


}

export default reducer;

