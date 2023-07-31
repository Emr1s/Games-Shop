import React from 'react'
import './ProductDetail.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCard } from '../../store/gameSlice'
const ProductDetail = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.game.game.find(item => item.id == productId));
  return (
    <div className='product-detail'>
      <div className="left">
        <img src={product.img} alt="" />
      </div>
      <div className="right">
        <div className="info">
          <h2>{product.name}</h2>
          <hr />
          <p><b>Price:</b> {product.price}$</p>
          <hr />
          <p><b>Genre:</b> Action, Shooter, RPG </p>
          <hr />
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let publishiz</span>
        </div>
        <hr />
        <div className="btn-buy">
          <button onClick={() => dispatch(addCard(product))}>Buy</button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail