import React from 'react'
import './ProductList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, searchFilter, clearFilter } from '../../store/gameSlice'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProductList = () => {
    const products = useSelector(state => state.game.game)
    const search = useSelector(state => state.game.search)
    const dispatch = useDispatch()
    const location = useLocation()
    const [sort, setSort] = useState('all')

    const sortProductsByPriceDesc = (a, b) => b.price - a.price;
    const sortProductsByPriceAsc = (a, b) => a.price - b.price;
    const sortProductsByNameAsc = (a, b) => a.name.localeCompare(b.name);
    let sortedProducts = [...products]
    if (sort === 'price-desc') {
        sortedProducts.sort(sortProductsByPriceDesc)
    } else if (sort === 'price-asc') {
        sortedProducts.sort(sortProductsByPriceAsc)
    } else if(sort === 'name-asc') {
        sortedProducts.sort(sortProductsByNameAsc)
    } else if(sort === 'all') {
        sortedProducts = products
    }


    const sortHandler = e => {
        setSort(e.target.value)
    }

    useEffect(() => {
        dispatch(clearFilter())
    }, [location])

    return (
        <div className="list">
            <div className="center">
                <input type="text" onChange={e => dispatch(searchFilter(e.target.value))} />
            </div>
            <div className="sort">
                <select value={sort} onChange={sortHandler} >
                    <option value="all">All</option>
                    <option value="price-desc">Sort by Price (High to Low)</option>
                    <option value="price-asc">Sort by Price (Low to High)</option>
                    <option value="name-asc">Sort by Name (A to Z)</option>
                </select>
            </div>
            <div className="product-list">
                {sortedProducts.filter(item => {
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