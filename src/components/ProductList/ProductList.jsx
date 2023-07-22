import React from 'react'
import './ProductList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, searchFilter } from '../../store/gameSlice'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const products = useSelector(state => state.game.game)
    const search = useSelector(state => state.game.search)
    const dispatch = useDispatch()

    return (
        <div className="list">
            <div className="center">
                <input type="text" onChange={e => dispatch(searchFilter(e.target.value))} />
            </div>
            <div className="product-list">
                {products.filter(item => {
                    if (search === '') {
                        return item
                    } else {
                        return item.name.toLowerCase().includes(search.toLowerCase())
                    }
                })
                    .map(item => (
                        <div className="item" key={item.id}>
                            <Link to={`/product/${item.id}`} className='link'>
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                                <p>Price: {item.price}$</p>
                            </Link>
                            <div className="btn-buy">
                                <button onClick={() => dispatch(addCard(item))}>Add to cart</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ProductList