//import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png';
import logo from '../Assets/logo.png';
import "./Navbar.css";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{color:'#626262', textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{color:'#626262',textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link  style={{color:'#626262',textDecoration: 'none'}} to='womens'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{color:'#626262',textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">0
            </div>
        </div>
    </div>
  )
}

export default Navbar