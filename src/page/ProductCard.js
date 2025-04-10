import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail=()=>{
    navigate(`/product/${item.id}`)

  }
  return (
    <div className="product-card" onClick={showDetail}>
        <img src={item?.img} alt={item?.title}/>
        {item?.choice ? (
                <span className="choice-true-text">추천상품</span>
            ) : '\u00A0'}
        <div>{item?.title}</div>
        <div>{item?.price}원</div>
        <div>{item?.new === true? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard