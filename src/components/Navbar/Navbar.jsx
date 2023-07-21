import React from 'react'
import './Navbar.scss'
import logo from '../../image/logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector(state => state.game.cart)
  const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className="left">
        <img className="logo-img" src={logo} alt="" />
        <Link to='/' className='name'>
          <h1>Game Shop</h1>
        </Link>
      </div>
      <div className="right">
        <Link to='/cart'><AiOutlineShoppingCart className='cart-item' onClick={() => setOpen(!open)} />
          {cart.length > 0 && <span className='cart-length'>{cart.length}</span>}
        </Link>
      </div>
    </div>
  )
}

export default Navbar