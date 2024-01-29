import React from 'react';
import img from './images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


const Header = () => {

  const [state , dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(state.user)
      auth.signOut();
  }

    return (
      <div className="header">
      <Link to={"/"}>
      <img
        className="header_logo"
        src={img}
      />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon className='header_searchIcon'/>
      </div> 

      
      <div className="header_nav">
      <Link to={!state.user && '/login'} >
        <div className="header_option header_option_signIn" onClick={handleAuthentication}>
          <span className="header_optionLineOne">Hello {state.user?.email}</span>
      <span className="header_optionLineTwo">{state.user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
      

        <div className="header_option">
          <span className="header_optionLineOne">Returns </span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className='header_optionBasket'>
        <ShoppingCart />
        <span className='header_optionLineTwo header_basketCount'>{state.basket.length}</span>
        </div>
        </Link>

      </div>



    </div>
     );
}
 
export default Header;
