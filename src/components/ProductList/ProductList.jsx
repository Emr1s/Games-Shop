import React from 'react'
import './ProductList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../../store/gameSlice'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const products = useSelector(state => state.game.game)
    const dispatch = useDispatch()

    return (
        <div className="product-list">
            {products.map(item => (
                <div className="item" key={item.id}>
                    <Link to={`/product/${item.id}`} className='link'>
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                        <p>Price: {item.price}$</p>
                    </Link>
                    <div className="btn-buy">
                        <button onClick={() => dispatch(addCard(item))}>Buy</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList