import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Info = styled.div`
opacity: 0;
    height: 100%;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
`
const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    min-width: 280px;
    height: 350px;
    background-color: #f5fafd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
        transition: all 0.5s ease;
    }
`
const Circle = styled.div`
    width: 250px;
    height: 300px;
   // border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(20%, 10%);
    z-index: 2;
`
const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    z-index: 3;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 3px;
    background-color: #e9f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #f8e0df;
        transform: scale(1.1);
    }
`



const Product = ({ item }) => {
  return (
    <Container>
        <Link to={`/products/${item.category}/${item._id}`}>
        <Circle>
        <Image src={item.img} />
        {item.name}
        </Circle>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorder />
            </Icon>
        </Info>
        </Link>
    </Container>
   
  )
}

export default Product
