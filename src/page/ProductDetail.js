import React, { useEffect, useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
  let{id} = useParams()
  const[product, setProduct] = useState(null)
  const getProductDetail = async ()=>{
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.choice ? (
                <span className="choice-true-text">추천상품</span>
            ) : '\u00A0'}</div>
          <div>{product?.new ? "신제품" : ""}</div>
          <div>{product?.title}</div>
          <div>{product?.price}원</div>      
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail