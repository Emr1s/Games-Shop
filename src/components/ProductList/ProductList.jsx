import React from 'react'
import './ProductList.scss'
import {useDispatch, useSelector} from 'react-redux'
import {addCard} from '../../store/gameSlice'

const ProductList = () => {
    const products = useSelector(state => state.game.game)
    const cart = useSelector(state => state.game.cart)
    const dispatch = useDispatch()

    return (
        <div className="product-list">
            {products.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <p>Price: {item.price}$</p>
                    <div className="btn-buy">
                        <button onClick={() => dispatch(addCard(item))}>Buy</button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ProductList