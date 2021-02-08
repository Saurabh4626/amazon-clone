import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { SportsBaseballTwoTone } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const login=()=>{
        if (user){auth.signOut();}
        
    }
    const [{basket,user}] =useStateValue();  //[state,dispatch]{destructure of state}
    //dispatch for function reducer
    console.log(basket)
    return (
        <nav className="header">
            {/* logo  */}
            <Link to="/">
                <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                />
            </Link>
            
            {/* searchbox */}
            <div className="header__search">
                <input 
                type="text" 
                className="header__searchInput"
                />
                <SearchIcon
                className="header__searchIcon"
                />
            </div>
            
            {/*  3 Links */}
            {/* basket icon with number */}
            <div className="header__Nav">
                {/* first link */}
                <Link 
                className="header__link"
                to={!user? "/login":""}
                >
                    <div onClick={login} className="element">
                        <span className="element1">hello {!user ?"":user.email}</span>
                        <span className="element2">{!user ? "Sign In":"Sign Out"}</span>
                    </div>  
                </Link>
                {/* second link */}
                <Link className="header__link">
                    <div className="element">
                        <span className="element1">Returns</span>
                        <span className="element2">Orders</span>
                    </div>  
                </Link>
                {/* third link */}
                <Link className="header__link">
                    <div className="element">
                        <span className="element1">Your</span>
                        <span className="element2">Prime</span>
                    </div>  
                </Link>
                {/* basketIcon */}
                <Link to="/checkout" className="header__link">
                    <div className="basket">
                        {/* basket icon */}
                        <ShoppingBasketIcon
                        className="shopicon"
                        />
                        {/* no of items */}
                        <span className="element2 basketcount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Header
