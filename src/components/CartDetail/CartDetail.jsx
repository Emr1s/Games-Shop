import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCard, incCount, decCount} from '../../store/gameSlice'
import './CartDetail.scss'

const CartDetail = () => {
    const cart = useSelector(state => state.game.cart)
    const dispatch = useDispatch()
    return (
        <div className='cart'>
            <div className="total">
                <p>Item`s in cart: {cart.length}</p>
                <p>Total price: {(cart.reduce((total, acc) => total + acc.price * acc.count, 0) * 1)} $</p>
            </div>
            {cart.map(item => (
                <div className="item-in-card" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="counter">
                        <p className='name'>{item.name}</p>
                    </div>
                    <div className="btn">
                        <p className='price'>{item.price}$</p>
                        <button className='btn-count' onClick={() => dispatch(decCount(item.id))}>-</button>
                        <span>{item.count}</span>
                        <button className='btn-count' onClick={() => dispatch(incCount(item.id))}>+</button>
                    </div>
                    <div className="btn-buy">
                        <button className='remove-btn' onClick={() => dispatch(removeCard(item.id))}>remove</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CartDetail