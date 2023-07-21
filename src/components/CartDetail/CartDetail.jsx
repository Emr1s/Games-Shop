import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCard, incCount, decCount } from '../../store/gameSlice'
import './CartDetail.scss'
import { Link } from 'react-router-dom'

const CartDetail = () => {
    const cart = useSelector(state => state.game.cart)
    const dispatch = useDispatch()
    return (
        <div className='cart'>
            <div className="total">
                <div className="title">
                    <h1>Cart</h1>
                </div>
                <div className="cart-info">
                    <p>Item`s in cart: {cart.length}</p>
                    <p>Total price: {(cart.reduce((total, acc) => total + acc.price * acc.count, 0) * 1)} $</p>

                </div>
            </div>
            {cart.length > 0 ? cart.map(item => (
                <div className="item-in-card" key={item.id}>
                    <hr />
                    <div className="test">
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="counter">
                            <p className='name'>{item.name}</p>
                        </div>
                        <div className="btn">
                            <button className='btn-count' onClick={() => dispatch(decCount(item.id))}>-</button>
                            <span>{item.count}</span>
                            <button className='btn-count' onClick={() => dispatch(incCount(item.id))}>+</button>
                        </div>
                        <p className='price'>{item.price}$</p>
                        <div className="btn-buy">
                            <button className='remove-btn' onClick={() => dispatch(removeCard(item.id))}>x</button>
                        </div>
                    </div>
                </div>
            ))
                :
                <div className="empty">
                    <span>Cart is empty</span>
                </div>
            }
            <div className="back">
                <Link to='/' className='name'>Back to shop</Link>
            </div>
        </div>
    )
}

export default CartDetail