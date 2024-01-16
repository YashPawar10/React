import React,{ useContext, useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart-icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext';

export const Navbar = () => {
  const [menu,setMenu]=useState('shop');
  const {getTotalCartItem} =useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <l1 onClick={() => setMenu("mens")}>
          <Link to="/mens">Mens</Link> {menu === "mens" ? <hr /> : <></>}
        </l1>
        <l1 onClick={() => setMenu("womens")}>
          <Link to="/womens">Womens</Link> {menu === "womens" ? <hr /> : <></>}
        </l1>
        <l1 onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </l1>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"> <img src={cart_icon} alt="" /></Link>
       
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
}
