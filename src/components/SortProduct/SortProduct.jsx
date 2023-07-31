import React from 'react'
import { useDispatch } from 'react-redux'
import { searchFilter } from '../../store/gameSlice'
import './SortProduct.scss'

const SortProduct = ({sort, sortHandler}) => {
    const dispatch = useDispatch()
    
    return (
        <>
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
        </>
    )
}

export default SortProduct