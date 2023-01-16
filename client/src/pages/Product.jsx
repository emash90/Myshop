import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    `
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    `
const ImgContainer = styled.div`
    flex: 1;
    `
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    `
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    `
const Title = styled.h1`
    font-weight: 200;
    `
const Desc = styled.p`
    margin: 20px 0px;
    `
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    `
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    `
const Filter = styled.div`
    display: flex;
    align-items: center;
    `
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    `
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
    `
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    `
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
// const RemoveCircleOutline  = styled.span`
//     cursor: pointer;

// `
// const AddCircleOutline  = styled.span`
//     cursor: pointer;


// `
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f4f4;
    border-radius: 50%;
    width: 40px;
    height: 40px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 10px;
    font-size: 20px;
    &:hover {
        background-color: #f8f4f4;
    }

    

`

const Product = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const id = location.pathname.split("/")[3]
    console.log(`id: ${id}`)
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/product/${id}`)
            console.log(`one data: ${res}`)
            setProduct(res.data)
        }
        console.log(`product: ${JSON.stringify(product)}`)
        getProduct()
    }, [id])
    const handleQuantity = (type) => {
        if (type === 'add') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity > 1 ? quantity - 1 : 1)
        }
    }
    const handleAddToCartClick = () => {
        dispatch(addProduct({ ...product, quantity, id: product._id, color: product.color[0], size: product.size[0] }))
    }
  return (
    <Container>
       <Navbar />
       <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.name}</Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Price>{product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                       {product.color > 1 ? product.color.map(c => (
                            <FilterColor color={c} key={c} />
                          )) : <FilterColor color={product.color} />
                          }
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            {product.size > 1 ? product.size.forEach(s => (
                            <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            )) : <FilterSizeOption>{product.size}</FilterSizeOption>
                            }
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveCircleOutline style={{ cursor: 'pointer' }} onClick={() => {handleQuantity('remove')}} />
                        <Amount>{quantity}</Amount>
                        <AddCircleOutline style={{ cursor: 'pointer' }} onClick={() => {handleQuantity('add')}} />
                    </AmountContainer>
                    <Button onClick={handleAddToCartClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
       </Wrapper>
       <Footer />
    </Container>
  )
}

export default Product
