import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCard, incCount, decCount } from '../../store/gameSlice'
import './CartDetail.scss'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const CartDetail = () => {
    const cart = useSelector(state => state.game.cart)
    const dispatch = useDispatch()
    const parse = cart.map(item => ({
        id: item.id,
        count: item.count 
    }));

    console.log(parse)
    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: parse
            })
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if(response.url){
                window.location.assign(response.url)
            }
        })
    }
    return (
        <div className='cart'>
            <div className="total">
                <div className="title">
                    <h1>Cart</h1>
                </div>
                <div className="cart-info">
                    <p>Item`s in cart: {cart.length}</p>
                    <p className='pay'>Total price: {(cart.reduce((total, acc) => total + acc.price * acc.count, 0) * 1)} $</p>

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
            <div className="bottom">
                <div className="back">
                    <Link to='/' className='name'>
                        <AiOutlineArrowLeft />
                        <p>Back to shop</p>
                    </Link>
                </div>
                    <div className="payment">
                        <button className={cart.length === 0 ? 'disabled' : 'btn-pay'} onClick={checkout}>Payment</button>
                    </div>
                

            </div>
        </div>
    )
}

export default CartDetail