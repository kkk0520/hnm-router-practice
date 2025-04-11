import React, { useEffect, useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";


const ProductDetail = () => {
  let{id} = useParams()
  const[product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null);
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
        <Col className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col>          
          <div className = "product-detail-info">
            {product?.choice ? <div className="product-choice"></div> : <div/>}
            {product?.new ? <div className="product-new"></div> : <div/>}
                            
            <div>{product?.title}</div>
            <div>{product?.price}원</div>
            {product?.size && Array.isArray(product.size) && (
                <Dropdown onSelect={(e) => setSelectedSize(e)}>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="size-dropdown"
                  >
                    {selectedSize
                      ? `사이즈 선택 : ${selectedSize}`
                      : "사이즈 선택"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {product.size.map((size, idx) => (
                      <Dropdown.Item key={idx} eventKey={size}>
                        {size}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}

              <Button variant="danger" className="add-button">
                추가
              </Button>      
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail